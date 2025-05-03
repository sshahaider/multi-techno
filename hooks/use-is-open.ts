import { create } from 'zustand';

interface OpenState {
	openStates: { [key: string]: boolean };
	setOpen: (key: string, value: boolean) => void;
}

const useStore = create<OpenState>((set) => ({
	openStates: {},
	setOpen: (key, value) =>
		set((state) => ({
			openStates: { ...state.openStates, [key]: value },
		})),
}));

const useIsOpen = (key: string) => {
	const { openStates, setOpen } = useStore();
	return {
		isOpen: openStates[key] || false,
		setOpen: (value: boolean) => setOpen(key, value),
	};
};

export { useIsOpen };
