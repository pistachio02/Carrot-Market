import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='bg-slate-300 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3'>

      <div className='bg-white flex flex-col justify-between p-6 rounded-3xl mb-10 shadow-xl sm:bg-red-200 md:bg-teal-200 lg:bg-purple-200 xl:bg-amber-200 2xl:bg-pink-600'>
        <span className='font-semibold text-3xl '>Select Item</span>
        <div className="flex justify-between my-2 ">
            <span className="text-gray-500">Grey Chair</span>
            <span className="font-semibold">$5</span>
        </div>
        <div className="flex justify-between my-2 ">
            <span className="text-gray-500">Black Table</span>
            <span className="font-semibold">$5</span>
        </div>
        <div className='mt-2 pt-2 border-t-2 border-dashed flex justify-between'>
          <span>Total</span>
          <span className='font-semibold'>$10</span>
        </div>
        <button className='mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500 block'>Checkout</button>
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

// 반응형 웹이나 앱을 만들때 보통 웹 형식에 맞춰 모든걸 만든 다음, 앱에 맞춰서 다시 조금씩 수정해나갔는데, 애초에 Tailwind CSS는 그 생각을 완전 반대로 하게 된다. 먼저 모바일 앱에 맞춰서 만들어진 다음 그 다음 더 큰 화면인 웹에 맞춰서 변화가 된다.

// 위 7번줄에 sm, md, lg, xl, 2xl 이 보일텐데, 이것들은 화면 사이즈에 따라 어떻게 변화를 줄지 설정하는것이다.
// 다만 sm이라고 small한 화면에 적응되는게 아니라 가장 기본은 아까 처음에 말했듯 모바일 화면인 제일 작은 화면부터 시작하는것이라 sm이라고 하면 모바일 화면 이후 가장 작은 화면부터 가장 큰 화면까지 라는 의미이고, md는 모바일 화면 그리고 small한 화면 다음 화면 사이즈부터 가장 큰사이즈까지이고 이렇게 sm이 단순히 small이라는걸 의미하는게 아니라 from small이라고 이해해야 한다. 즉 정리하자면 sm은 from small, md는 from medium, lg는 from large, xl는 from x-large, 2xl는 from 2x-large라는 의미이다.

// 다시 한 번 얘기하지만 기존에 생각했던대로 큰화면인 웹 화면에 맞춰서 만들고 그다음 앱으로 가는게 아니라 애초에 앱화면인 제일 작은 화면부터 가장 큰 화면인 웹으로 간다고 생각하면 된다.

// 이렇게 가장 작은 사이즈의 화면에서부터 가장 큰 사이즈의 화면으로 가는게 더 좋은 이유는 limit이 없기 때문이다. 가작 작은 사이즈부터 순차적으로 사이즈에 따라 변화점을 주게 되면 나중에 더 큰 화면으로 가는 사이즈에 대해서만 설정을 해주면 되기 때문에 이러한점도 장점이라고 볼 수 있겠다.


// ~~~~~~~~~~~~~~~~~~~~~~


// 47번줄에 보면 lg일때의 조건을 만들어주고 그 다음 그 조건을 끝내줄 xl일때의 조건을 같이 써줬다. 이유는 아까도 설명했든 조건을 하나만 써놓으면 그 조건에서부터 끝까지 계속 그 조건이 유효하게 될거라 그렇다. 그래서 조건을 하나 만들어준 뒤 그 조건을 끝내고 싶다면 반드시 조건을 끝내는 조건도 하나 같이 쌍으로 만들어줘야 한다.

// 25번줄에 있는 landscape는 만약 모바일 화면에서 볼때 화면 모드가 가로모드인지 세로모드인지에 따라 다르게 표현하고 싶을때 설정해주는것이다. 기본은 세로모드이고 landscape 설정을 해주면 가로모드일때 어떻게 변화를 주고싶은지 설정할 수 있게 된다.
