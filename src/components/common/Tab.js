export default function Tab({ tabData, field, setField }) {
    return (
      <div
        style={{
          boxShadow: "",
        }}
        className="flex border bg-richblack-5 p-1 gap-x-1 my-6 rounded-full max-w-max"
      >
        {tabData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setField(tab.type)}
            className={`${
              field === tab.type
                ? "bg-richblack-50 text-richblack-800"
                : "bg-transparent text-richblack-800"
            } py-2 px-5 rounded-full transition-all duration-200`}
          >
            {tab?.tabName}
          </button>
        ))}
      </div>
    );
  }