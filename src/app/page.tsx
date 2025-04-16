import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [yiyan, setYiyan] = useState("正在加载一言..."); // 用于存储一言的 state

  useEffect(() => {
    // 使用 fetch 获取一言
    fetch("https://swkapi.meowaw.me/api/yiyan")
      .then((response) => response.json()) // 将响应解析为 JSON
      .then((data) => {
        if (data && data.content) {
          setYiyan(data.content); // 设置一言内容
        }
      })
      .catch((error) => {
        console.error("获取一言失败:", error);
        setYiyan("无法加载一言"); // 如果失败，显示错误信息
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        性行为同意协议系统
      </h1>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg mb-4">
          欢迎使用性行为同意协议系统。本系统旨在帮助用户创建合法有效的性行为同意协议，确保各方权益得到保障。
        </p>
        <p className="text-md mb-8">
          通过本系统，您可以创建、查看和管理性行为同意协议，所有数据均存储在本地，保障您的隐私安全。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        <Link href="/create" className="btn btn-primary btn-lg w-full">
          创建新协议
        </Link>
        <Link href="/agreements" className="btn btn-outline btn-lg w-full">
          查看我的协议
        </Link>
      </div>

      <div className="mt-12 p-6 bg-base-200 rounded-lg max-w-3xl w-full">
        <h2 className="text-xl font-semibold mb-4">关于性同意协议</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>性同意协议是双方或多方在进行性活动前达成的明确同意</li>
          <li>协议内容包括同意的范围、安全措施、隐私保护等</li>
          <li>任何一方均有权随时撤回同意</li>
          <li>协议遵循自愿、平等、真实的原则</li>
          <li>本系统生成的协议可打印出来供双方手签</li>
          <li>POWERED BY SWK</li>
          <li>有任何问题联系Q:2940714815</li>
        </ul>
      </div>

      {/* 显示一言 */}
      <div className="mt-8 p-6 bg-base-100 rounded-lg max-w-3xl w-full">
        <h2 className="text-xl font-semibold mb-4">今日一言</h2>
        <p className="text-center">{yiyan}</p>
      </div>
    </div>
  );
}
