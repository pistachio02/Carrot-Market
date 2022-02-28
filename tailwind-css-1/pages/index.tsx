import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='bg-slate-300 py-20 px-20 grid gap-10'>

      <div className='bg-white p-6 rounded-3xl mb-10 shadow-xl'>
        <span className='font-semibold text-3xl '>Select Item</span>
        <ul>
           {[1, 2, 3, 4, 5].map((i) => (
             <div
               key={i}
               className="flex justify-between my-2 odd:bg-blue-50 even:bg-yellow-50 first:bg-teal-50 last:bg-amber-50"
             >
               <span className="text-gray-500">Grey Chair</span>
               <span className="font-semibold">$2</span>
             </div>
           ))}
         </ul>
         <ul>
           {["First", "Second", "Third", ""].map((c, i) => (
             <li className="bg-red-100 py-2 empty:hidden text-center text-red-400 text-xs" key={i}>
               {c}
             </li>
           ))}
         </ul>
        <div className='mt-2 pt-2 border-t-2 border-dashed flex justify-between'>
          <span>Total</span>
          <span className='font-semibold'>$10</span>
        </div>
        <button className='mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500 block'>Checkout</button>
      </div>

      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14">
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

      <div className="bg-white p-6 rounded-3xl shadow-xl">
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


// 이전 Tailwind CSS는 실제로 엄청나게 큰 CSS 파일이었기때문에 이를 이용해서 코드를 짤때 코드가 완성된 후 배포하기 전 purging이라고 하는 과정을 거쳤어야 했다.
// purging은 쉽게 말해 배포하기 전 모든 코드를 훑어보고 실질적으로 사용하지 않는 클래스네임들을 찾아 지워주는 과정이라고 생각하면 된다. 그러니까 쓸데없는 클래스네임들을 찾아 지워주는 청소의 과정이라고 이해하자.
// 이러한 purging의 과정이 꼭 필요했기에 지금까지 배웠던 dark:sm:hover: 이런식으로 조건의 조건의 조건을 설정해주는것을 할 수가 없었는데, 지금은 Just-In-Time 컴파일러 라는것 덕분에 이러한것들이 가능하게 되었다.
// JIT 컴파일러라는것은 내가 작성하는 코드들을 실시간으로 감시해가면서 필요한 클래스들을 생성하는 기능을 한다고 보면 된다.

// 조금 더 쉽게 설명하자면 이전에 Tailwind CSS를 사용했을때는 실제로 엄청나게 많은 CSS파일들이 있고 우리가 그 중 필요한것들을 이용해 코드를 짜고 코드가 완성되면 배포하기 전 purging이라는 과정을 거쳐 필요가 없고 사용하지 않는 모든 클래스들을 찾아 지워줬어야 했는데, 지금은 JIT 컴파일러라는것이 생겨서 이제는 전처럼 지우고 뭐하고 하는 그런 과정 없이 그냥 코드를 작성할때마다 그때그때 만들어져야 하는 클래스들을 즉각즉각 자동으로 만들어주기 때문에 dark:sm:hover: 와 같은 조건에 조건을 더하는 이러한 것들이 가능하게 되었다는 얘기이다.

// 위 설명한 이러한 기능도 이미 강력하고 충분한 장점이 되는데 더 큰 장점은 따로 있다.

// 만약 우리가 <h4>hello</h4> 라는 태그를 만들때, 저기 있는 hello의 사이즈를 기본 제공하는 sm, lg, md, xl, 2xl 이런 사이즈가 아니라 그냥 존나 크게 우리가 설정하고 싶은대로 설정하고 싶다면 기존에는 <h4 style={{fontSize:8000}} >hello</h4> 이런식으로 해줬어야 했다. 그런데 지금은 그렇게 번거롭게 할 것 없이 이미 Tailwind에서도 할 수 있는 방법이 생겼는데 바로 이것이다. 
// <h4 className="text-[8000]">hello</h4> 이런식으로 할 수 있게 되었다.
// 기존 Tailwind 사용하는 방법에서 크게 벗어나지 않고 더 편리하고 간단하게 설정할 수 있게 되서 이러한 점도 큰 장점이자 강력한 기능이라고 할 수 있겠다.
// 색상도 이렇게 설정할 수 있게 되었다. <h4 className="text-[8000] text-[#000]">hello</h4> 이렇게 내가 원하는 대로 색상도 설정을 할 수가 있다.

// 근데 또 이거보다 더 강력하고 편리한 큰 장점이 있다고 한다. 바로 백그라운드 이미지를 설정하는 방법이다. 기존에는 태그 안에 style={{backgroundImage" "url"}} 이런식으로 설정을 해줬어야 했다면 이제는, bg-[url("실질적인url, 예를들면 /vercel.svg")] 이렇게 설정해주면 끝이다.

