import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, TruckIcon, ShieldCheckIcon, HeadphonesIcon } from 'lucide-react';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export const HomePage: React.FC = () => {
  const flashSaleProducts = products.slice(0, 4);
  const featuredProducts = products.slice(4, 8);
  
  // Animation states
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 15,
    hours: 18,
    minutes: 49,
    seconds: 47
  });

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Countdown timer animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;
        let newDays = prev.days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes--;
          if (newMinutes < 0) {
            newMinutes = 59;
            newHours--;
            if (newHours < 0) {
              newHours = 23;
              newDays--;
            }
          }
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const serviceFeatures = [
    {
      icon: TruckIcon,
      title: 'FREE AND FAST DELIVERY',
      description: 'Free delivery for all orders over ₹999',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 CUSTOMER SERVICE',
      description: 'Friendly 24/7 customer support',
    },
    {
      icon: ShieldCheckIcon,
      title: 'MONEY BACK GUARANTEE',
      description: '30-day return policy for your peace of mind',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="text-blue-200 text-lg font-medium animate-bounce">iPhone 14 Series</div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="inline-block animate-pulse">Up to 10%</span><br />
                <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  off Voucher
                </span>
              </h1>
              <p className={`text-xl text-blue-100 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Discover the latest technology with unbeatable prices and premium quality.
              </p>
              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <Link to="/products">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Shop Now
                    <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="iPhone 14"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sales Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <div className="w-4 h-10 bg-blue-600 rounded-lg mr-4 animate-pulse"></div>
            <h2 className="text-blue-600 text-2xl font-semibold">Today's</h2>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-0 hover:text-blue-600 transition-colors duration-300">
              Flash Sales
            </h1>
            
            {/* Animated Countdown Timer */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-sm text-gray-600 mb-2 animate-pulse">Ends in:</div>
              <div className="flex space-x-4 text-2xl font-bold">
                <div className="text-center">
                  <div className="text-gray-900 bg-white rounded-lg px-2 py-1 shadow-md hover:scale-110 transition-transform duration-300">
                    {countdown.days.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Days</div>
                </div>
                <div className="text-blue-600 animate-pulse">:</div>
                <div className="text-center">
                  <div className="text-gray-900 bg-white rounded-lg px-2 py-1 shadow-md hover:scale-110 transition-transform duration-300">
                    {countdown.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Hours</div>
                </div>
                <div className="text-blue-600 animate-pulse">:</div>
                <div className="text-center">
                  <div className="text-gray-900 bg-white rounded-lg px-2 py-1 shadow-md hover:scale-110 transition-transform duration-300">
                    {countdown.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Min</div>
                </div>
                <div className="text-blue-600 animate-pulse">:</div>
                <div className="text-center">
                  <div className="text-gray-900 bg-white rounded-lg px-2 py-1 shadow-md hover:scale-110 transition-transform duration-300 animate-pulse">
                    {countdown.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Sec</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {flashSaleProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <div className="w-4 h-10 bg-blue-600 rounded-lg mr-4 animate-pulse"></div>
            <h2 className="text-blue-600 text-2xl font-semibold">Categories</h2>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 hover:text-blue-600 transition-colors duration-300">
            Browse By Category
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <Link key={category.id} to={`/products?category=${category.name}`}>
                <Card className={`h-32 hover:shadow-lg transition-all duration-500 hover:scale-105 cursor-pointer border-2 hover:border-blue-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="flex flex-col items-center justify-center h-full p-4">
                    <div className="text-3xl mb-2 group-hover:animate-bounce transition-all duration-300">
                      {category.icon}
                    </div>
                    <h3 className="font-medium text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium electronics and gadgets
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`text-center group transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300 hover:scale-110">
                  <feature.icon className="w-10 h-10 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};