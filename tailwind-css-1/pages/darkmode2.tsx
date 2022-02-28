import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='bg-slate-300 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 dark'>

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

// 5번줄에 보면 dark라고 되어있는데 이렇게 모든 요소들의 부모 태그에 dakr라고 해놔야 그 아래 자식 태그들에 있는 dark 모드가 활성화 된다. 이렇게 부모 태그에 dark라고 설정해놓으면 애초에 tailwind.config.js에서 다크모드를 media가 아닌 class로 설정해놨기 때문에 컴퓨터의 다크모드를 따라가지 않고 항상 다크모드가 활성화 된다.

// 그렇기때문에 만약 토글을 만들어서 수동으로 다크모드를 활성화시켜주고싶으면 어떠한 버튼을 만들고 그 버튼을 눌렀을때 부모태그에 dark가 추가되도록 해주기만 하면 되는것이다.


// ~~~~~~~~~~~~~~~~~~~


// 다크모드에 대해서 정리하자면 우선 첫번째로 tailwind.config.js에 다크모드에 대해서 설정을 해줘야 한다.
// 그 설정으로는 media나 class가 있는데 media는 사용하는 컴퓨터의 다크모드 여부에 따라 같이 가는거고, class는 사용하는 컴퓨터의 다크모드 여부에 상관없이 따로 수동으로 다크모드를 활성화시키고 싶을때 사용하는 설정이다.
// media로 되어있으면 그저 단순히 태그들 안에서 dark: 로 조건을 걸어서 다크모드일때 어떻게 해주겠다 라는 조건을 만들어주면 되지만,
// class로 되어있을땐 위에서 다크모드를 사용하는 태그들에 dark:로 설정을 해놔도 활성화가 되지 않는다. 언제까지? 가장 윗 상단에 있는 부모 태그에 dark를 넣기 전까진. 만약 토글이나 버튼을 만들어 수동으로 다크모드를 설정하고 싶다면 어떠한 버튼을 눌렀을때, 가장 윗 상단에 있는 부모 태그의 클래스네임 안에 dark를 넣는 함수를 만들거나 그러한 설정을 만들어 놓으면 수동으로 직접 다크모드를 활성화/비활성화 시킬 수 있게 된다.
