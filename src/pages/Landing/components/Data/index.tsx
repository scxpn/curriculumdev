import { Flex, Box, Text } from "@chakra-ui/react";
//@ts-ignore
import Chart from "react-apexcharts";
import { User } from "../../../../utils/types";

export default ({ user }: { user: User }) => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        expandOnClick: false,
      },
    },
  };
  const series = [44, 55, 41, 17, 15];

  return (
    <Flex>
      <Chart options={options} series={series} type="pie" />
    </Flex>
  );
};
