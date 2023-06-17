import React, { useEffect, useState } from 'react';
import ProductOne from '../images/product/product-01.png';


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
const TableTwo = () => {
    const [forecast, setForecast] = useState<WeatherForecast | null>(null);

    useEffect(() => {
    // Fetch weather forecast data
      const fetchWeatherForecast = async () => {
        try {
          const response = await fetch('/WeatherForecast');
          const data = await response.json();
          setForecast(data);
        } catch (error) {
          console.error('Error fetching weather forecast:', error);
        }
      };

      fetchWeatherForecast();
    }, []);

  if (!forecast) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Weather Forecast
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Date</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Temperature C</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Temperature F</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Summary</p>
        </div>
      </div>
      {forecast.map((item) => (
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <img src={ProductOne} alt="Product" />
            </div>
            <p className="text-sm text-black dark:text-white">
                {item.date}
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="text-sm text-black dark:text-white">{item.temperatureC}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">{item.temperatureF}</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="text-sm text-black dark:text-white">{item.summary}</p>
        </div>
      </div>
      ))}
    
    </div>
  );
};

export default TableTwo;
