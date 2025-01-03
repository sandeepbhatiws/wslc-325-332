import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <nav class="mx-auto w-full mt-4 max-w-[1200px] px-5">
                <ul class="flex items-center">
                    <li class="cursor-pointer">
                        <a href="index.html">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="h-5 w-5"
                            >
                                <path
                                    d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                                />
                                <path
                                    d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                                />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <span class="mx-2 text-gray-500">&gt;</span>
                    </li>

                    <li class="text-gray-500">My Wishlist</li>
                </ul>
            </nav>

            <section
                class="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10"
            >

                <section class="hidden flex-shrink-0 px-4 lg:block">
                    <div class="border-b py-5">
                        <div class="flex items-center">
                            <img
                                width="40px"
                                height="40px"
                                class="rounded-full object-cover"
                                src="./images/avatar-photo.png"
                                alt="Red woman portrait"
                            />
                            <div class="ml-5">
                                <p class="font-medium text-gray-500">Hello,</p>
                                <p class="font-bold">Sarah Johnson</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="w-full">
                            <div class="flex w-full">
                                <div class="flex flex-col gap-2">
                                    <Link
                                        href="account-page"
                                        class="flex items-center gap-2 font-medium active:text-violet-900"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-5 w-5"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                            />
                                        </svg>
                                        Manage account</Link>
                                    <Link
                                        href="profile-information"
                                        class="text-gray-500 duration-100 hover:text-yellow-400"
                                    >Profile information</Link>
                                    <Link
                                        href="manage-address"
                                        class="text-gray-500 duration-100 hover:text-yellow-400"
                                    >Manage Addresses</Link>
                                    <Link
                                        href="change-password"
                                        class="text-gray-500 duration-100 hover:text-yellow-400"
                                    >Change password</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="flex w-full">
                            <div class="flex flex-col gap-2">
                                <Link
                                    href="my-order-history"
                                    class="flex items-center gap-2 font-medium active:text-violet-900"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="h-5 w-5"
                                    >
                                        <path
                                            d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>

                                    My Order History</Link >
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="flex w-full">
                            <div class="flex flex-col gap-2">
                                <Link
                                    href="payment-methods"
                                    class="flex items-center gap-2 font-medium active:text-violet-900"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-5 w-5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                                        />
                                    </svg>

                                    Payment Methods</Link>
                            </div>
                        </div>
                    </div>

                    <div class="flex border-b py-5">
                        <div class="flex w-full">
                            <div class="flex flex-col gap-2">
                                <Link
                                    href="wishlist"
                                    class="flex items-center gap-2 font-medium text-violet-900"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-5 w-5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>

                                    My Wishlist</Link >
                            </div>
                        </div>
                    </div>

                    <div class="flex py-5">
                        <div class="flex w-full">
                            <div class="flex flex-col gap-2">
                                <a
                                    href="#"
                                    class="flex items-center gap-2 font-medium active:text-violet-900"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-5 w-5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                        />
                                    </svg>

                                    Log Out</a
                                >
                            </div>
                        </div>
                    </div>
                </section>

                <div class="mb-5 flex items-center justify-between px-5 lg:hidden">
                    <div class="flex gap-3">
                        <div class="py-5">
                            <div class="flex items-center">
                                <img
                                    width="40px"
                                    height="40px"
                                    class="rounded-full object-cover"
                                    src="./assets/images/avatar-photo.png"
                                    alt="Red woman portrait"
                                />
                                <div class="ml-5">
                                    <p class="font-medium text-gray-500">Hello,</p>
                                    <p class="font-bold">Sarah Johnson</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <section
                    class="mx-auto container grid grid-cols-2 gap-5 px-5 pb-10 md:hidden"
                >

                    <div class="flex flex-col">
                        <div class="relative flex">
                            <img
                                class=""
                                src="./images/product-chair.png"
                                alt="sofa image"
                            />
                            <div
                                class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100"
                            >
                                <span
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <p class="mt-2">CHAIR</p>
                            <p class="font-medium text-violet-900">$45.00</p>
                            <p>Availability: <span class="text-green-600">In stock</span></p>

                            <div class="flex items-center gap-3">
                                <button class="my-5 h-10 w-full bg-violet-900 text-white">
                                    Add to cart
                                </button>
                                <i class="cursor-pointer"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-6 w-6"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col">
                        <div class="relative flex">
                            <img
                                class=""
                                src="./images/product-chair.png"
                                alt="sofa image"
                            />
                            <div
                                class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100"
                            >
                                <span
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <p class="mt-2">CHAIR</p>
                            <p class="font-medium text-violet-900">$45.00</p>
                            <p>Availability: <span class="text-green-600">In stock</span></p>

                            <div class="flex items-center gap-3">
                                <button class="my-5 h-10 w-full bg-violet-900 text-white">
                                    Add to cart
                                </button>
                                <i
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-6 w-6"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col">
                        <div class="relative flex">
                            <img
                                class=""
                                src="./images/product-chair.png"
                                alt="sofa image"
                            />
                            <div
                                class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100"
                            >
                                <span
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <p class="mt-2">CHAIR</p>
                            <p class="font-medium text-violet-900">$45.00</p>
                            <p>
                                Availability: <span class="text-red-600">Out of stock</span>
                            </p>

                            <div class="flex items-center gap-3">
                                <button class="my-5 h-10 w-full bg-violet-900 text-white">
                                    Add to cart
                                </button>
                                <i
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-6 w-6"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col">
                        <div class="relative flex">
                            <img
                                class=""
                                src="./images/product-chair.png"
                                alt="sofa image"
                            />
                            <div
                                class="absolute flex h-full w-full items-center justify-center gap-3 opacity-0 duration-150 hover:opacity-100"
                            >
                                <span
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </span>
                                <span
                                    class="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-amber-400"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="h-4 w-4"
                                    >
                                        <path
                                            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <p class="mt-2">CHAIR</p>
                            <p class="font-medium text-violet-900">$45.00</p>
                            <p>
                                Availability: <span class="text-red-600">Out of stock</span>
                            </p>

                            <div class="flex items-center gap-3">
                                <button class="my-5 h-10 w-full bg-violet-900 text-white">
                                    Add to cart
                                </button>
                                <i
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-6 w-6"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    class="hidden w-full max-w-[1200px] grid-cols-1 gap-8 px-5 pb-10 md:grid"
                >

                    <div
                        class="flex w-full flex-row h-44 items-center justify-between border py-5 px-4"
                    >
                        <div class="flex w-full items-center gap-4">
                            <img
                                width="100px"
                                class="object-cover"
                                src="./images/kitchen.png"
                                alt="Kitchen image"
                            />

                            <div class="flex w-2/5 flex-col justify-center">
                                <p class="text-xl font-bold">ITALIAN KITCHEN</p>
                                <p class="text-gray-500">
                                    Availability:
                                    <span class="font-medium text-green-600">In Stock</span>
                                </p>
                            </div>
                        </div>

                        <div class="flex w-3/5 items-center justify-between flex-row">
                            <p class="mt-2 text-xl font-bold text-violet-900">$320.00</p>

                            <div class="mt-2 flex items-center">
                                <button class="w-full px-2 bg-amber-400 py-2 lg:px-5">
                                    Add to cart
                                </button>

                                <i class="ml-5 cursor-pointer"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-6 w-6"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex w-full h-44 flex-row items-center justify-between border py-5 px-4"
                    >
                        <div class="flex w-full items-center gap-4">
                            <img
                                width="100px"
                                class="object-cover"
                                src="./images/bedroom.png"
                                alt="Bedroom image"
                            />

                            <div class="flex flex-col justify-center">
                                <p class="text-xl font-bold">QUEEN SIZE BED</p>
                                <p class="text-gray-500">
                                    Availability:
                                    <span class="font-medium text-green-600">In Stock</span>
                                </p>
                            </div>
                        </div>

                        <div class="flex w-3/5 items-center justify-between flex-row">
                            <p class="mt-2 text-xl font-bold text-violet-900">$320.00</p>

                            <div class="mt-2 flex items-center">
                                <button class="w-full px-2 bg-amber-400 py-2 lg:px-5">
                                    Add to cart
                                </button>

                                <i class="ml-5 cursor-pointer"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-6 w-6"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex w-full h-44 flex-row items-center justify-between border py-5 px-4"
                    >
                        <div class="flex w-full items-center gap-4">
                            <img
                                width="100px"
                                class="object-cover"
                                src="./images/living-room.png"
                                alt="Sofa image"
                            />

                            <div class="flex flex-col justify-center">
                                <p class="text-xl font-bold">LARGE SOFA</p>
                                <p class="text-gray-500">
                                    Availability:
                                    <span class="font-medium text-green-600">In Stock</span>
                                </p>
                            </div>
                        </div>

                        <div class="flex w-3/5 items-center justify-between flex-row">
                            <p class="mt-2 text-xl font-bold text-violet-900">$320.00</p>

                            <div class="mt-2 flex items-center">
                                <button class="w-full px-2 bg-amber-400 py-2 lg:px-5">
                                    Add to cart
                                </button>

                                <i class="ml-5 cursor-pointer"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-6 w-6"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex w-full h-44 flex-row items-center justify-between border py-5 px-4"
                    >
                        <div class="flex w-full items-center gap-4">
                            <img
                                width="100px"
                                class="object-cover"
                                src="./images/product-chair.png"
                                alt="Chair image"
                            />

                            <div class="flex flex-col justify-center">
                                <p class="text-xl font-bold">CHAIR PURPLE</p>
                                <p class="text-gray-500">
                                    Availability:
                                    <span class="font-medium text-red-600">Out of Stock</span>
                                </p>
                            </div>
                        </div>

                        <div class="flex w-3/5 items-center justify-between flex-row">
                            <p class="mt-2 text-xl font-bold text-violet-900">$320.00</p>

                            <div class="mt-2 flex items-center">
                                <button class="w-full px-2 bg-amber-400 py-2 lg:px-5">
                                    Add to cart
                                </button>

                                <i class="ml-5 cursor-pointer"
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="h-6 w-6"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </i>
                            </div>
                        </div>
                    </div>
                </section>

            </section>

    </>
  )
}
