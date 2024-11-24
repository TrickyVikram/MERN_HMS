import { BRAND } from '../../types/brand'; //interFace 

const brandData: BRAND[] = 
[
  {
    img: "https://avatars.githubusercontent.com/u/114013697?v=4",
    name: "Vikram Kumar",
    roomNo: "23 (B)",
    Contact: "+91 7479931246",
    EdataStart: "20-11-2024",
    EdataEnd: "20-11-2025"
  },
  {
    img: "https://github.com/priyankarpal.png?size=40",
    name: "Rohan Mehta",
    roomNo:  "25 (B)",
    Contact: "+91 8437295610",
    EdataStart: "01-01-2024",
    EdataEnd: "01-01-2025"
  },
  {
    img: "https://avatars.githubusercontent.com/u/96990535?v=4",
    name: "Anjali Singh",
    roomNo: "25 (G)",
    Contact: "+91 9348756123",
    EdataStart: "15-03-2024",
    EdataEnd: "15-03-2025"
  },
  {
    img: "https://avatars.githubusercontent.com/u/118162572?s=48&v=4",
    name: "Aditya Sharma",
    roomNo: "21 (B)",
    Contact: "+91 9123456789",
    EdataStart: "10-06-2024",
    EdataEnd: "10-06-2025"
  },
  {
    img: "https://github.com/Priyanka488.png?size=40",
    name: "Priya Verma",
    roomNo: "33 (G)",
    Contact: "+91 9876543210",
    EdataStart: "25-07-2024",
    EdataEnd: "25-07-2025"
  },
  {
    img: "https://github.com/aadi01x.png?size=40",
    name: "Kunal Roy",
    roomNo: "33 (B)",
    Contact: "+91 8765432198",
    EdataStart: "02-08-2024",
    EdataEnd: "02-08-2025"
  },
  {
    img: "https://github.com/Radhasingh95.png?size=40",
    name: "Neha Gupta",
    roomNo: "33 (G)",
    Contact: "+91 7654321987",
    EdataStart: "18-09-2024",
    EdataEnd: "18-09-2025"
  },
  
]
;

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Current Students
      </h4>

      <div className="flex flex-col">
        {/* Table Headers */}
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Students Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Room No
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Contact
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Start Date
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              End Date
            </h5>
          </div>
        </div>


        {/* Table Rows */}
        {brandData.map((Students, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === brandData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img
                  src={Students.img}
                  alt={`Profile picture of ${Students.name}`}
                  className="rounded-full w-10 h-10"
                />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {Students.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{Students.roomNo}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{Students.Contact}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{Students.EdataStart}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{Students.EdataEnd}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
