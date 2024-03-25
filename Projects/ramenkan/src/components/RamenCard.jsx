import React from 'react'

const RamenCard = ({
  ramenShops,
  currPhoto,
  currShop,
  currIdx,
  setCurrIdx,
}) => {
  return (
    <div className="card-container">
      {ramenShops.length > 0 && currPhoto.authorId !== '' && (
        <>
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <img
              className="h-90 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl"
              src={currPhoto.url}
              alt={currShop.name}
            />
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                {currShop.id}
              </span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                {currShop.name}
              </h3>
              {/* <p className="mt-3 text-gray-500">
                A software that develops products for software developers and
                developments.
              </p> */}
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
              <button
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href={currPhoto.authorId}
                disabled={currIdx === 0}
                onClick={() => setCurrIdx((idx) => (idx > 0 ? idx - 1 : 0))}
              >
                {`<-`}
              </button>
              <button
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                disabled={currIdx === ramenShops.length - 1}
                href={currPhoto.authorId}
                onClick={() =>
                  setCurrIdx((idx) => (idx + 1) % ramenShops.length)
                }
              >
                {`->`}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default RamenCard
