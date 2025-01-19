import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxionProtected from '../../../../hooks/useAxiosProtected/useAxionProtected';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { PencilIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import { TfiControlShuffle } from 'react-icons/tfi';
import { FaDeleteLeft } from 'react-icons/fa6';
import { FiDelete } from 'react-icons/fi';
import Swal from 'sweetalert2';

const TABS = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Monitored',
    value: 'monitored',
  },
  {
    label: 'Unmonitored',
    value: 'unmonitored',
  },
];

const TABLE_HEAD = ['Member', 'Role', 'Status', 'Employed', 'delete'];

const AllUser = () => {
  const axionProtected = useAxionProtected();
  const { data: user = [], refetch } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const result = await axionProtected.get('/user');
      console.log(result.data);

      return result.data;
    },
  });
  console.log(user);
  const handealMakeAdmin = id => {
  
    axionProtected.patch(`/user/admin/${id}`).then(res => {
      console.log(res.data);
      refetch()
      if (res.data.modifiedCount > 0) {
        
      }
    });
  };
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
        axionProtected.delete(`/user/${id}`).then(res => {
          console.log(res.data);
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

  const TABLE_ROWS = [
    {
      // img: 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg',
      name: 'John Michael',
      email: 'john@creative-tim.com',
      job: 'Manager',
      org: 'Organization',
      online: true,
      date: '23/04/18',
    },
  ];

  return (
    <div>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Members list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all members
              </Typography>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                view all
              </Button>
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>

            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
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
              {user.map(
                (
                  { photo, name, email, _id, role, job, org, online, date },
                  index
                ) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? 'p-4'
                    : 'p-4 border-b border-blue-gray-50';
                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={photo} alt={name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {`User`}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {org}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={!online ? 'online' : 'offline'}
                            color={online ? 'green' : 'blue-gray'}
                          />
                        </div>
                      </td>

                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {role == 'admin' ? (
                            'Admin'
                          ) : (
                            <>
                              <button onClick={() => handealMakeAdmin(_id)}>
                                Make admin
                              </button>
                            </>
                          )}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                            <button onClick={() => handealDelete(_id)}>
                              <FiDelete className="text-xl"></FiDelete>
                            </button>
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default AllUser;
