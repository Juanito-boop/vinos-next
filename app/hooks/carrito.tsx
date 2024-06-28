import { useEffect, useState } from "react";
import { CartItem } from "@/app/lib/Interfaces";

const useCart = () => {
	const [ cartItems, setCartItems ] = useState<CartItem[]>(() => {
		if (typeof window !== "undefined") {
			const items = JSON.parse(
				localStorage.getItem("cartItems") || "[]"
			).filter(
				(item: CartItem) =>
					item.timestamp &&
					new Date().getTime() - item.timestamp < 10 * 24 * 60 * 60 * 1000
			);
			return items;
		}
		return [];
	});

	useEffect(() => {
		const tenDaysAgo = new Date().getTime() - 10 * 24 * 60 * 60 * 1000;
		const filteredItems = cartItems.filter(
			(item) => !item.timestamp || item.timestamp > tenDaysAgo
		);

		if (filteredItems.length !== cartItems.length) {
			setCartItems(filteredItems);
		}

		localStorage.setItem("cartItems", JSON.stringify(filteredItems));
	}, [cartItems]);

	const addToCart = (newItem: CartItem) => {
		setCartItems((prevItems) => {
			const existingItemIndex = prevItems.findIndex(
				(item) => item.productId === newItem.productId
			);
			if (existingItemIndex > -1) {
				const updatedItems = [...prevItems];
				updatedItems[existingItemIndex] = {
					...updatedItems[existingItemIndex],
					quantity: updatedItems[existingItemIndex].quantity + newItem.quantity,
				};
				return updatedItems;
			} else {
				return [...prevItems, { ...newItem, timestamp: new Date().getTime() }];
			}
		});
	};

	const removeFromCart = (productId: number) => {
		setCartItems((prevItems) =>
			prevItems.filter((item) => item.productId !== productId)
		);
	};

	return { cartItems, addToCart, removeFromCart };
};

export default useCart;
