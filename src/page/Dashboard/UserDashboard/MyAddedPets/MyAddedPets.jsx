import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosProtected from '../../../../hooks/useAxiosProtected/useAxionProtected';
import useAuth from '../../../../hooks/useAuth/useAuth';
import { PencilIcon } from '@heroicons/react/24/solid';
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const TABLE_HEAD = [
  'Number',
  'Category',
  'Publish',
  'Status',
  'Delete',
  'Updeat',
];

const MyAddedPets = () => {
  const { user } = useAuth();
  const axiosProtected = useAxiosProtected();
  const { refetch, data: pets = [] } = useQuery({
    queryKey: ['pets', user?.email],
    queryFn: async () => {
      const res = await axiosProtected.get(`/pet?email=${user.email}`);
      res.data;
      return res.data;
    },
  });
  const handealDelete = async id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        axiosProtected.delete(`/pet/${id}`).then(res => {
          res.data;
          refetch();
          Swal.fire({
            title: 'Deleted!',
            text: 'Your file has been deleted.',
            icon: 'success',
          });
        });
      }
    });
  };

  // const handealAdopt = (id) => {
  //   axiosProtected.patch(`/pets/adopted/${id}`)
  //     .then(res => {
  //       alert('ksksss')
  //     console.log(res.data)
  //   })
  // }
  return (
    <div>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                My Added Pets
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about the My Added Pets
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map(head => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pets.map(
                (
                  {
                    _id,
                    image,
                    name,
                    category,
                    date,
                    status,
                    account,
                    accountNumber,
                    expiry,
                  },
                  index
                ) => {
                  const isLast = index === pets.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div
                          className="flex items-center 
                        agap-3"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold mx-2"
                          >
                            {index + 1}
                          </Typography>
                          <Avatar
                            src={image}
                            alt={name}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 mx-2 "
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {category}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {date?.split(',')}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          {/* <Chip
                            size="sm"
                            variant="ghost"
                            value={status}
                            color={
                              status === 'paid' ? (
                                <>sfd</>
                              ) : status === 'pending' ? (
                                <>sdfsdf</>
                              ) : (
                                <>sfsfd</>
                              )
                            }
                          /> */}
                          <button>Adopted</button>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="h-9  rounded-md border border-blue-gray-50 hover:bg-red-600 hover:text-white p-1">
                            <button onClick={() => handealDelete(_id)}>
                              {' '}
                              Delete
                            </button>
                          </div>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal capitalize"
                            >
                              {account?.split('-').join(' ')} {accountNumber}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {expiry}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit Pets">
                          <Link to={`/updeats/${_id}`}>
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Link>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
            <IconButton variant="text" size="sm">
              ...
            </IconButton>
            <IconButton variant="text" size="sm">
              8
            </IconButton>
            <IconButton variant="text" size="sm">
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MyAddedPets;
