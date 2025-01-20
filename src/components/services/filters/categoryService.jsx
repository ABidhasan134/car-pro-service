import axios from "axios";
import { useForm } from "react-hook-form";

const CategoryService = ({ setcategoryData, setCategoryTotalPages, setCurrentPage }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    //   console.log(data);
      const response = await axios.post(`/api/service/filter/category`, { data: data.category });

      if (response.data.result) {
          setcategoryData(response.data.result);
          setCategoryTotalPages(response.data.totalPagescategory); // Update total pages
          setCurrentPage(1); // Reset to first page
      }
    //   console.log("Response:", response.data);
  };

  return (
      <form onChange={handleSubmit(onSubmit)} className="border-1 border-red-500">
          <select
              {...register("category")}
              className="btn btn-ghost px-3 border-2 border-[#FF3811] hover:bg-[#FF3811] hover:text-white"
          >
              <option className="pl-3" value="General Maintenance">
                  General Maintenance
              </option>
              <option className="pl-3" value="Engine Services">
                  Engine Services
              </option>
              <option className="pl-3" value="Electrical Services">
                  Electrical Services
              </option>
              <option className="pl-3" value="Transmission Services">
                  Transmission Services
              </option>
              <option className="pl-3" value="Air Conditioning and Heating">
                  Air Conditioning and Heating
              </option>
          </select>
      </form>
  );
};

export default CategoryService;
