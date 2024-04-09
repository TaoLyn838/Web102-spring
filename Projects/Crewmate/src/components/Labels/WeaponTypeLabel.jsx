export const WeaponTypeLabel = ({ types, userType, handleChange }) => {
  return (
    <div>
      <label className="label-title">
        <h3>Choose a type:</h3>
      </label>
      <ul className="max-w-md flex flex-col">
        {Object.keys(types).map((type, index) => (
          <li
            className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-gray-900 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-900 dark:border-gray-700 dark:text-white"
            key={type}
          >
            <div className="relative flex items-start w-full">
              <div className="flex items-center h-5">
                <input
                  id={`hs-list-group-item-radio-${index}`}
                  type="radio"
                  name="type"
                  className="border-gray-200 rounded-full disabled:opacity-50 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                  value={type}
                  checked={userType === type}
                  onChange={handleChange}
                />
              </div>
              <label
                htmlFor={`hs-list-group-item-radio-${index}`}
                className={`type-${type}-color`}
              >
                {type}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
