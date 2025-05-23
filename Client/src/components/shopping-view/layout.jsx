import React from 'react';

const layout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
        <ShoppinHeader/>
        <main className="flex flex-col w-full">
            <Outlet/>
        </main>
    </div>
  )
}

export default layout;
