
import { MdOutlineErrorOutline } from "react-icons/md";
import { VscCloudDownload } from "react-icons/vsc";



// TableFetch
const TableFetch = ({ colSpan }: any) => (
  <tr>
    <td colSpan={colSpan} id="table-loader">
      <div className="center-content">
        <VscCloudDownload size={75} />
        <p id="mt-3">Fetching request...</p>
      </div>
    </td>
  </tr>
);

// NoRecordFound
const NoRecordFound = ({ colSpan }: any) => (
  <tr>
    <td colSpan={colSpan} id="table-loader">
      <div className="center-content">
        <MdOutlineErrorOutline size={75} />
        <p id="mt-3">No record found</p>
      </div>
    </td>
  </tr>
);




const EntriesLimit = ({ data, limit, handlePagination }: any) => (
  <div className="entries-perpage">
    {data?.length > 1 && (
      <>
        Entries
        <select
          value={limit}
          // @ts-ignore
          onChange={(e) => handlePagination('limit', e)}  >
          {["5", "8", "10", "25", "50"].map((optionValue) => (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          ))}
        </select>
        Perpage
      </>
    )}
  </div>
);


const customId = "custom-id-yes";





export {
  TableFetch,
  NoRecordFound,
  EntriesLimit,
  customId
};
