import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  } from '@headlessui/react'
  import { XMarkIcon } from '@heroicons/react/24/outline'
  import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import axios from 'axios'

const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
  ]
  const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: true },
      ],
    },
  ]

export default function LeftSideCategoryFilter({filterCategories, setFilterCategories, filterPriceFrom, setFilterPriceFrom, filterPriceTo, setFilterPriceTo}) {

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
        .then((success) => {
            setCategories(success.data.data);
        }).catch((error) => {
            
        })
    },[]);

    useEffect(() => {
      axios.get('https://wscubetech.co/ecommerce-api/brands.php')
      .then((success) => {
        setBrands(success.data.data);
      }).catch((error) => {
          
      })
  },[]);

  const filterCategory = (category_slug) => {

    if(filterCategories.includes(category_slug)){
        filterCategories = filterCategories.filter((value) => {
            if(value != category_slug){
                return value;
            }
        })
    } else {
        filterCategories.push(category_slug);
    }

    const finalData = [...filterCategories];

    
    console.log(filterCategories);
    setFilterCategories(finalData);
  }

  const priceFilter = (from,to) => {
    setFilterPriceFrom(from)
    setFilterPriceTo(to);
  }

  return (
    <>
      <form className="hidden lg:block">
            <Disclosure as="div" className="border-b border-gray-200 py-6">
              <h3 className="-my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">Categories</span>
                  <span className="ml-6 flex items-center">
                      <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                      <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                  </span>
                  </DisclosureButton>
              </h3>
              <DisclosurePanel className="pt-6">
                  <div className="space-y-4">
                  {categories.map((value,index) => (
                      <div key={ index } className="flex gap-3">
                      <div className="flex h-5 shrink-0 items-center">
                          <div className="group grid size-4 grid-cols-1">
                          <input
                                onClick={() => filterCategory(value.slug) }
                              defaultValue=""
                              defaultChecked=""
                              id={`filter-${value.id}`}
                              name=""
                              type="checkbox"
                              className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                              fill="none"
                              viewBox="0 0 14 14"
                              className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                          >
                              <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:checked]:opacity-100"
                              />
                              <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:indeterminate]:opacity-100"
                              />
                          </svg>
                          </div>
                      </div>
                      <label htmlFor={`filter-${value.id}`} className="text-sm text-gray-600">
                          {value.name}
                      </label>
                      </div>
                  ))}
                  </div>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure as="div" className="border-b border-gray-200 py-6">
              <h3 className="-my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">Brands</span>
                  <span className="ml-6 flex items-center">
                      <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                      <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                  </span>
                  </DisclosureButton>
              </h3>
              <DisclosurePanel className="pt-6">
                  <div className="space-y-4">
                  {brands.map((value,index) => (
                      <div key={ index } className="flex gap-3">
                      <div className="flex h-5 shrink-0 items-center">
                          <div className="group grid size-4 grid-cols-1">
                          <input
                              defaultValue=""
                              defaultChecked=""
                              id={`filter-${value.id}`}
                              name=""
                              type="checkbox"
                              className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                              fill="none"
                              viewBox="0 0 14 14"
                              className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                          >
                              <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:checked]:opacity-100"
                              />
                              <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:indeterminate]:opacity-100"
                              />
                          </svg>
                          </div>
                      </div>
                      <label htmlFor={`filter-${value.id}`} className="text-sm text-gray-600">
                          {value.name}
                      </label>
                      </div>
                  ))}
                  </div>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure as="div" className="border-b border-gray-200 py-6">
              <h3 className="-my-3 flow-root">
                  <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                  <span className="font-medium text-gray-900">Price</span>
                  <span className="ml-6 flex items-center">
                      <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                      <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                  </span>
                  </DisclosureButton>
              </h3>
              <DisclosurePanel className="pt-6">
                  <div className="space-y-4">
                    <div class="flex items-center gap-x-3" onClick={ () => priceFilter(0,250) }>
                        <input id="0-250" name="push-notifications" type="radio"  class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                        
                        <label for="0-250" class="block text-sm/6 font-medium text-gray-900">Rs. 0 to Rs. 250</label>
                    </div>
                    <div class="flex items-center gap-x-3" onClick={ () => priceFilter(251,500) }>
                        <input id="251-500" name="push-notifications" type="radio"  class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                        
                        <label for="251-500" class="block text-sm/6 font-medium text-gray-900">Rs. 251 to Rs. 500</label>
                    </div>
                    <div class="flex items-center gap-x-3" onClick={ () => priceFilter(501,750) }>
                        <input id="501-750" name="push-notifications" type="radio"  class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                        
                        <label for="501-750" class="block text-sm/6 font-medium text-gray-900">Rs. 501 to Rs. 750</label>
                    </div>
                    <div class="flex items-center gap-x-3" onClick={ () => priceFilter(751,1000) }>
                        <input id="751-1000" name="push-notifications" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                        
                        <label for="751-1000" class="block text-sm/6 font-medium text-gray-900">Rs. 751 to Rs. 1000</label>
                    </div>
                    <div class="flex items-center gap-x-3" onClick={ () => priceFilter(1001) }>
                        <input id="1001" name="push-notifications" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden" />
                        
                        <label for="1001" class="block text-sm/6 font-medium text-gray-900">Rs. 1001 and above</label>
                    </div>
                  </div>
              </DisclosurePanel>
            </Disclosure>
    </form>
    </>
  )
}
