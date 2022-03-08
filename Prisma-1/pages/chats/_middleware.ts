import type { NextRequest, NextFetchEvent } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    console.log("Chats Only Middleware!!");
};

// 이런식으로 특정 페이지 안에서만 작동하게 되는 미들웨어를 만들수도 있다.