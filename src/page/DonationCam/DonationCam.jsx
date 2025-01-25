import { Helmet } from 'react-helmet-async';
import { Card } from '@material-tailwind/react';

import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import useAxiosProtected from '../../hooks/useAxiosProtected/useAxionProtected';
import { Link } from 'react-router-dom';

const DonationCam = () => {
  const axiosProtected = useAxiosProtected();
  const { data: donations = [] } = useQuery({
    queryKey: ['donation'],
    queryFn: async () => {
      const res = await axiosProtected.get('/donations');
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="mt-10">
      <Helmet>
        <title>Pet-Haven || Donation campaigns</title>
      </Helmet>
      <h2 className="text-center text-4xl">Donation campaigns</h2>
      {donations.length}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {donations.map(item => (
          <div key={item._id}>
            <Card className="p-4 mt-8 ">
              <div className="">
                <img
                  className="w-[500px] h-96 rounded-2xl object-center"
                  src={item.image}
                  alt=""
                />
                <div>
                  <p className="mt-4">
                    <span className="text-xl   font-semibold">Date: </span>
                    {item?.date}
                  </p>
                  <p className="mt-2">
                    <span className="text-xl  font-semibold">Amount: $ </span>
                    {item?.amount}
                  </p>
                  <h3 className="mt-2">
                    <span className="text-xl  font-semibold">Note: </span>
                    {item?.note}
                  </h3>{' '}
                  <h3 className="mt-3">
                    <span className="text-xl font-semibold">Description: </span>
                    {item?.descriptions}
                  </h3>
                  <div className="flex gap-4">
                    <Link
                      to={`/donation-cam-details/${item?._id}`}
                      className="px-6 mt-4 hover:bg-light-green-700 hover:text-white  py-3 border rounded-md"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DonationCam;
