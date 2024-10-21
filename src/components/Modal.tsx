import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useAppStore } from '../stores/useAppStore';
import { Recipe } from '../types';

export default function Modal() {

    const modal = useAppStore((state) => state.modal)
    const closeModal = useAppStore((state) => state.closeModal)
    const selectedRecipe = useAppStore((state) => state.selectedRecipe)

    const renderIngredients = () => {

        const ingredients : JSX.Element[] = []

        for(let i = 1; i <= 6; i++) {
            const ingredient = selectedRecipe[`strIngredient${i}` as keyof Recipe]
            const measure = selectedRecipe[`strMeasure${i}` as keyof Recipe]

            if(ingredient && measure) {
                ingredients.push(
                    <li className='text-lg font-normal' key={i}>
                        {ingredient} - {measure}
                    </li>
                )
            }
        }

        return ingredients
    }

    const handleClickFavorite = () => {
        return 
    }

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                                <Dialog.Title as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                                    {selectedRecipe.strDrink}
                                </Dialog.Title>

                                    <img 
                                        src={selectedRecipe.strDrinkThumb} alt={`Image of ${selectedRecipe.strDrink}`} className="w-96 mx-auto"
                                    />

                                <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                    Ingredients and Measurements
                                </Dialog.Title>

                                    {renderIngredients()}

                                <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                    Instructions
                                </Dialog.Title>

                                <p className="text-lg">{selectedRecipe.strInstructions}</p>

                                <div className="flex justify-between gap-4">
                                    <button onClick={closeModal} className="duration-300 bg-slate-700 hover:bg-slate-800 mt-5 w-full p-2 font-extrabold text-white">
                                        Close
                                    </button>

                                    <button onClick={() => handleClickFavorite} className="duration-300 bg-orange-400 hover:bg-orange-500 mt-5 w-full p-2 font-extrabold text-white">
                                        Add to Favorites
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}