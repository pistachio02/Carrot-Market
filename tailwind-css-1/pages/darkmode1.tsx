import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='bg-slate-300 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3'>

      <div className='bg-white flex flex-col justify-between p-6 rounded-3xl mb-10 shadow-xl dark:bg-black'>
        <span className='font-semibold text-3xl dark:text-white'>Select Item</span>
        <div className="flex justify-between my-2 ">
            <span className="text-gray-500 dark:text-gray-50">Grey Chair</span>
            <span className="font-semibold dark:text-gray-50">$5</span>
        </div>
        <div className="flex justify-between my-2 ">
            <span className="text-gray-500 dark:text-gray-50">Black Table</span>
            <span className="font-semibold dark:text-gray-50">$5</span>
        </div>
        <div className='mt-2 pt-2 border-t-2 border-dashed flex justify-between'>
          <span className='dark:text-gray-50'>Total</span>
          <span className='font-semibold dark:text-gray-50'>$10</span>
        </div>
        <button className='mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500 block dark:bg-black dark:border-white dark:border dark:hover:bg-red-900 dark:hover:text-white'>Checkout</button>
      </div>

      <div className="bg-white  overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14 xl:pb-36 landscape:bg-teal-300">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-zinc-400 rounded-full group-hover:bg-black transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative  flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-200 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className='space-x-2'>
              <button className='w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-1 ring-yellow-500 transition' />
              <button className='w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-1 ring-indigo-500 transition' />
              <button className='w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-1 ring-teal-500 transition' />
            </div>
            <div className="flex items-center space-x-5">
              <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                 -
              </button>
              <span>1</span>
              <button className=" rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                 +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-6 text-center text-xs text-white rounded-lg">
               Add to cart
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home

// 다크모드는 구현하는게 그리 어렵지는 않다. 다만 다크모드를 어떻게 켜고 끌것인가, 어떠한 방법으로 그것을 구현할것인가가 더 중요하다고 볼 수 있다. 기본적으로 다크모드는 컴퓨터의 환경에 따라가게 되어있다. 맥북을 기본모드로 쓰면 브라우저도 기본모드로 되는것이고 맥북을 다크모드로 쓰면 브라우저도 다크모드로 되는것이다.

// dark 라고 클래스네임에 추가하고 조건을 만들어주면 된다.(주로색상) 이렇게 하는것은 브라우저가 맥북의 모드에 따라 설정될때 하는 방법이다. 만약 다크모드를 켜고 끌 수 있는 버튼이 따로 있다면 다른 방법으로 할 수 있다.

