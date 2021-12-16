import { Box, Flex, SimpleGrid, Text, theme, VStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
});

const seriesRadialBars = [350, 150];

let total = 0;
for (let i = 0; i < seriesRadialBars.length; i++) {
    total += seriesRadialBars[i];
}
const v1 = (100*350)/total;
const v2 = (100*150)/total;
const temSeries = [v1, v2];


const optionsRadialBars =   {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px'
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return total;
            }
          }
        }
      }
    },
    labels: ['Sent', 'Received', 'Errors'],
    colors: ["#0000ff", theme.colors.cyan[400]]
  }

const seriesBar =  [{
    name: 'Inflation',
    data: [300, 100, 250, 270, 150, 250]
}];

const optionsBar = {
        chart: {
            toolbar: {
                show: false
            },
            height: 350,
            type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 5,
            columnWidth: '20%',
          }
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
            enabled: false
        },
        stroke: {
          width: 2
        },
        
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          tickPlacement: 'on'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
          },
        }
      }

const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]
    },
    grid: {
        show:false
    },
    dataLabels: {
        enabled:false
    },
    tooltip: {
        enabled: false
    },

    xaxis: {
        type:'month',
        axisBorder: {
            color: theme.colors.gray[600]
        },

        axisTicks: {
            color: theme.colors.gray[600]
        },

        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Ago',
            'Sep',
            'Oct',
            'Nov',
            'Dez'
        ]
    },

    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }

};

const series = [
    { name: 'series1', data: [
        3100, 1220, 7500, 4900, 2090, 9023,
        3400, 9200, 8950, 3890, 3920, 12902
    ] }
]; 

export default function Dashboard(){
    return (
        <Flex display="flex" h="100vh"> 
            <Sidebar />
            <Flex display="flex" flexDirection="column" h="100%" maxWidth={1480}>
             <Header />
                <Box display="flex">
                    <SimpleGrid 
                        display="flex"
                        gap="4"
                        minChildWidth="360px"
                        alignItems="center"
                        ml="10vh"
                        mr="10vh"
                    >
                        <Box 
                            padding="8"
                            bg="white"
                            borderRadius={8}
                            pb="4"
                        >

                            <Text fontSize="large" mb="4">Emails Sent</Text>
                            <Chart
                                options={optionsRadialBars}
                                series={temSeries}
                                type="radialBar"
                                height={190}
                                pb="4"
                            />
                        </Box>

                        <Box 
                            padding="8"
                            bg="white"
                            borderRadius={8}
                            pb="4"
                        >

                            <Text fontSize="large" mb="4">Users Activity</Text>
                            <Chart
                                options={optionsBar}
                                series={seriesBar}
                                type="bar"
                                height={160}
                                pb="4"
                            />
                        </Box>

                        <Box 
                            padding="8"
                            bg="white"
                            borderRadius={8}
                            pb="4"
                        >
                        
                            <Text fontSize="large" mb="4">Overall Revenue</Text>
                            <Chart
                                options={options}
                                series={series}
                                type="area"
                                height={160}
                                pb="4"
                            />
                        </Box>
                    </SimpleGrid>
                </Box>
            </Flex>
        </Flex>
    );
}