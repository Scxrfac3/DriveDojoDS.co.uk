import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import EliteServicesSection from "../sections/EliteServicesSection";
import {
  ArrowRight,
  Calendar,
  Car,
  CheckCircle,
  ChevronRight,
  Clock,
  CreditCard,
  MapPin,
  Sparkles,
  User,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedInstructor, setSelectedInstructor] = useState<string | null>(
    null,
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    experience: "beginner",
    notes: "",
    marketingConsent: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      marketingConsent: checked,
    });
  };

  const handleRadioChange = (value: string) => {
    setFormData({
      ...formData,
      experience: value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const packages = [
    {
      id: "single",
      title: "2-Hour Introductory Lesson",
      price: "£60",
      originalPrice: "£75",
      duration: "2 hours",
      description: "Special offer for new students only - first lesson!",
      features: [
        "Professional instructor",
        "Flexible scheduling",
        "Door-to-door service",
        "Extended learning time",
      ],
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
      gradient: "from-blue-900/95 to-slate-900/95",
      popular: false,
      emoji: "🚗",
    },
    {
      id: "package10",
      title: "10-Hour Package",
      price: "£300",
      originalPrice: "£350",
      duration: "10 hours",
      description: "Our most popular package for new learners",
      features: [
        "Save £50 on individual lessons",
        "Structured learning plan",
        "Progress tracking",
        "Theory test support",
        "Priority scheduling",
      ],
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      gradient: "from-red-900/95 to-yellow-900/95",
      popular: true,
      emoji: "🔥",
    },
    {
      id: "package20",
      title: "20-Hour Package",
      price: "£570",
      originalPrice: "£650",
      duration: "20 hours",
      description: "Best value for complete beginners",
      features: [
        "Maximum savings",
        "Comprehensive training",
        "Theory test support",
        "Mock test included",
        "Dedicated instructor",
      ],
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      gradient: "from-green-900/95 to-slate-900/95",
      popular: false,
      emoji: "💯",
    },
  ];

  const instructors = [
    {
      id: "sarah",
      name: "Sarah Johnson",
      rating: 4.9,
      reviews: 124,
      experience: "8 years",
      specialties: ["Nervous beginners", "Test preparation"],
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      availability: ["Weekdays", "Saturday mornings"],
    },
    {
      id: "michael",
      name: "Michael Chen",
      rating: 4.8,
      reviews: 98,
      experience: "6 years",
      specialties: ["Highway driving", "Parking skills"],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      availability: ["Evenings", "Weekends"],
    },
    {
      id: "amina",
      name: "Amina Patel",
      rating: 5.0,
      reviews: 87,
      experience: "10 years",
      specialties: ["Advanced maneuvers", "Refresher courses"],
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      availability: ["Weekdays", "Sunday afternoons"],
    },
  ];

  const availableDates = [
    { date: "2023-07-10", day: "Monday", month: "July", dayNum: 10 },
    { date: "2023-07-11", day: "Tuesday", month: "July", dayNum: 11 },
    { date: "2023-07-12", day: "Wednesday", month: "July", dayNum: 12 },
    { date: "2023-07-13", day: "Thursday", month: "July", dayNum: 13 },
    { date: "2023-07-14", day: "Friday", month: "July", dayNum: 14 },
    { date: "2023-07-15", day: "Saturday", month: "July", dayNum: 15 },
    { date: "2023-07-17", day: "Monday", month: "July", dayNum: 17 },
    { date: "2023-07-18", day: "Tuesday", month: "July", dayNum: 18 },
    { date: "2023-07-19", day: "Wednesday", month: "July", dayNum: 19 },
    { date: "2023-07-20", day: "Thursday", month: "July", dayNum: 20 },
  ];

  const availableTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center mb-8">
        <div className="flex items-center w-full max-w-3xl">
          {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <motion.div
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full ${step === i ? "bg-blue-600" : step > i ? "bg-green-500" : "bg-gray-200"} ${step === i ? "ring-4 ring-blue-100" : ""}`}
                initial={{ scale: 0.8 }}
                animate={{
                  scale: step === i ? 1.1 : 1,
                  backgroundColor:
                    step === i ? "#2563eb" : step > i ? "#22c55e" : "#e5e7eb",
                }}
                transition={{ duration: 0.3 }}
              >
                {step > i ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <span className="text-sm font-bold text-white">{i}</span>
                )}

                <div className="absolute -bottom-8 w-max text-xs font-medium text-gray-500">
                  {i === 1 && "Choose Package"}
                  {i === 2 && "Select Date & Time"}
                  {i === 3 && "Your Details"}
                  {i === 4 && "Payment"}
                </div>
              </motion.div>

              {i < 4 && (
                <motion.div
                  className={`flex-1 h-1 ${step > i ? "bg-green-500" : "bg-gray-200"}`}
                  initial={{ backgroundColor: "#e5e7eb" }}
                  animate={{
                    backgroundColor: step > i ? "#22c55e" : "#e5e7eb",
                  }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  const renderPackageSelection = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          Choose Your Lesson Package
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Select the package that best suits your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 h-[400px] ${selectedPackage === pkg.id ? "ring-4 ring-blue-500" : "ring-1 ring-gray-200"}`}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {/* Background Image with Gradient Overlay */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-90 group-hover:opacity-95 transition-opacity duration-300`}
                ></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col p-6 text-white">
                {pkg.popular && (
                  <motion.div
                    className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded-full flex items-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, delay: 0.3 }}
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    Popular
                  </motion.div>
                )}

                <div className="mb-2 flex items-center">
                  <motion.span
                    className="text-2xl mr-2"
                    animate={{
                      rotate:
                        selectedPackage === pkg.id ? [0, -10, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {pkg.emoji}
                  </motion.span>
                  <motion.h3
                    className="text-2xl font-bold"
                    animate={{ scale: selectedPackage === pkg.id ? 1.05 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {pkg.title}
                  </motion.h3>
                </div>

                <div className="flex items-center mb-4">
                  {pkg.originalPrice && (
                    <span className="text-white/70 line-through text-lg mr-2">
                      {pkg.originalPrice}
                    </span>
                  )}
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-white/80 ml-2 text-sm">
                    ({pkg.duration})
                  </span>
                </div>

                <p className="text-white/90 mb-4">{pkg.description}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mt-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className={`w-full ${selectedPackage === pkg.id ? "bg-white text-blue-700" : "bg-white/20 text-white"} hover:bg-white hover:text-blue-700 font-bold text-sm py-6`}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    {selectedPackage === pkg.id ? "Selected" : "Select Package"}
                  </Button>
                </motion.div>
              </div>

              {selectedPackage === pkg.id && (
                <motion.div
                  className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            onClick={nextStep}
            disabled={!selectedPackage}
          >
            Continue to Schedule
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    );
  };

  const renderDateTimeSelection = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-center mb-2">
          Choose Your Schedule
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Select a date, time and instructor for your lesson
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Date Selection */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-600 text-white p-4">
              <h3 className="font-bold text-lg flex items-center">
                <Calendar className="mr-2 h-5 w-5" /> Select Date
              </h3>
            </div>
            <div className="p-4 max-h-[400px] overflow-y-auto">
              <div className="grid grid-cols-1 gap-2">
                {availableDates.map((date) => (
                  <motion.div
                    key={date.date}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${selectedDate === date.date ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedDate(date.date)}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{date.day}</p>
                        <p className="text-sm text-gray-500">
                          {date.month} {date.dayNum}
                        </p>
                      </div>
                      {selectedDate === date.date && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          <CheckCircle className="h-5 w-5 text-blue-500" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Time Selection */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="bg-blue-600 text-white p-4">
              <h3 className="font-bold text-lg flex items-center">
                <Clock className="mr-2 h-5 w-5" /> Select Time
              </h3>
            </div>
            <div className="p-4 max-h-[400px] overflow-y-auto">
              <div className="grid grid-cols-2 gap-2">
                {availableTimes.map((time) => (
                  <motion.div
                    key={time}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${selectedTime === time ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedTime(time)}
                  >
                    <div className="flex justify-between items-center">
                      <p className="font-medium">{time}</p>
                      {selectedTime === time && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          <CheckCircle className="h-5 w-5 text-blue-500" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Instructor Selection */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="bg-blue-600 text-white p-4">
              <h3 className="font-bold text-lg flex items-center">
                <Users className="mr-2 h-5 w-5" /> Select Instructor
              </h3>
            </div>
            <div className="p-4 max-h-[400px] overflow-y-auto">
              <div className="grid grid-cols-1 gap-3">
                {instructors.map((instructor) => (
                  <motion.div
                    key={instructor.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${selectedInstructor === instructor.id ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-blue-300"}`}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedInstructor(instructor.id)}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">{instructor.name}</p>
                          {selectedInstructor === instructor.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            >
                              <CheckCircle className="h-5 w-5 text-blue-500" />
                            </motion.div>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-yellow-500">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                          <span className="ml-1 text-gray-600">
                            ({instructor.rating}) · {instructor.reviews} reviews
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {instructor.specialties.join(" • ")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Selected Package Summary */}
        {selectedPackage && (
          <motion.div
            className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <h3 className="font-bold text-lg mb-2">Your Selection</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <Car className="h-5 w-5 text-blue-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Package</p>
                  <p className="font-medium">
                    {packages.find((p) => p.id === selectedPackage)?.title}
                  </p>
                </div>
              </div>
              {selectedDate && (
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Date & Time</p>
                    <p className="font-medium">
                      {availableDates.find((d) => d.date === selectedDate)?.day}
                      ,{" "}
                      {
                        availableDates.find((d) => d.date === selectedDate)
                          ?.month
                      }{" "}
                      {
                        availableDates.find((d) => d.date === selectedDate)
                          ?.dayNum
                      }{" "}
                      {selectedTime && `at ${selectedTime}`}
                    </p>
                  </div>
                </div>
              )}
              {selectedInstructor && (
                <div className="flex items-center">
                  <User className="h-5 w-5 text-blue-500 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Instructor</p>
                    <p className="font-medium">
                      {
                        instructors.find((i) => i.id === selectedInstructor)
                          ?.name
                      }
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={prevStep}
            className="border-gray-300 text-gray-700"
          >
            Back
          </Button>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            onClick={nextStep}
            disabled={!selectedDate || !selectedTime || !selectedInstructor}
          >
            Continue to Details
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.div>
    );
  };

  const renderPersonalDetails = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-center mb-2">Your Details</h2>
        <p className="text-gray-600 text-center mb-8">
          Please provide your information to complete your booking
        </p>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-blue-600 text-white p-4">
            <h3 className="font-bold text-lg flex items-center">
              <User className="mr-2 h-5 w-5" /> Personal Information
            </h3>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="firstName" className="mb-2 block">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="mb-2 block">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="w-full"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="email" className="mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john.doe@example.com"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(123) 456-7890"
                  className="w-full"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="address" className="mb-2 block">
                Address
              </Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Main St, City, Country"
                className="w-full"
                required
              />
            </div>

            <div className="mb-6">
              <Label className="mb-2 block">Driving Experience</Label>
              <RadioGroup
                value={formData.experience}
                onValueChange={handleRadioChange}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="beginner" id="beginner" />
                  <Label htmlFor="beginner">
                    Complete Beginner (No experience)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="some" id="some" />
                  <Label htmlFor="some">
                    Some Experience (Less than 10 hours)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="intermediate" id="intermediate" />
                  <Label htmlFor="intermediate">
                    Intermediate (10-20 hours of lessons)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="advanced" id="advanced" />
                  <Label htmlFor="advanced">
                    Advanced (Ready for test or refresher)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="mb-6">
              <Label htmlFor="notes" className="mb-2 block">
                Additional Notes (Optional)
              </Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Any specific requirements or information you'd like us to know"
                className="w-full h-24"
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="marketingConsent"
                checked={formData.marketingConsent}
                onCheckedChange={handleCheckboxChange}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="marketingConsent"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to receive marketing communications
                </label>
                <p className="text-sm text-gray-500">
                  You can unsubscribe at any time. Read our{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={prevStep}
            className="border-gray-300 text-gray-700"
          >
            Back
          </Button>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
            onClick={nextStep}
            disabled={
              !formData.firstName ||
              !formData.lastName ||
              !formData.email ||
              !formData.phone
            }
          >
            Continue to Payment
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </motion.div>
    );
  };

  const renderPayment = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-center mb-2">Payment</h2>
        <p className="text-gray-600 text-center mb-8">
          Complete your booking by providing payment details
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="font-bold text-lg">Order Summary</h3>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">Package</p>
                    <div className="flex justify-between items-center">
                      <p className="font-medium">
                        {packages.find((p) => p.id === selectedPackage)?.title}
                      </p>
                      <p className="font-bold">
                        {packages.find((p) => p.id === selectedPackage)?.price}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {packages.find((p) => p.id === selectedPackage)?.duration}
                    </p>
                  </div>

                  <div className="border-t border-gray-200 my-4 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-600">Subtotal</p>
                      <p className="font-medium">
                        {packages.find((p) => p.id === selectedPackage)?.price}
                      </p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-600">Booking Fee</p>
                      <p className="font-medium">£0.00</p>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-gray-600">VAT (20%)</p>
                      <p className="font-medium">
                        £
                        {(
                          parseInt(
                            packages
                              .find((p) => p.id === selectedPackage)
                              ?.price.replace("£", "") || "0",
                          ) * 0.2
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 my-4 pt-4">
                    <div className="flex justify-between items-center">
                      <p className="font-bold">Total</p>
                      <p className="font-bold text-xl text-blue-600">
                        £
                        {(
                          parseInt(
                            packages
                              .find((p) => p.id === selectedPackage)
                              ?.price.replace("£", "") || "0",
                          ) * 1.2
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-blue-50 p-3 rounded-lg border border-blue-100">
                    <div className="flex">
                      <Calendar className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Your Lesson Details</p>
                        <p className="text-sm text-gray-600 mt-1">
                          {
                            availableDates.find((d) => d.date === selectedDate)
                              ?.day
                          }
                          ,{" "}
                          {
                            availableDates.find((d) => d.date === selectedDate)
                              ?.month
                          }{" "}
                          {
                            availableDates.find((d) => d.date === selectedDate)
                              ?.dayNum
                          }{" "}
                          at {selectedTime}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Instructor:{" "}
                          {
                            instructors.find((i) => i.id === selectedInstructor)
                              ?.name
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Payment Form */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="font-bold text-lg flex items-center">
                    <CreditCard className="mr-2 h-5 w-5" /> Payment Method
                  </h3>
                </div>
                <div className="p-6">
                  <Tabs defaultValue="card" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="card">Credit Card</TabsTrigger>
                      <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      <TabsTrigger value="apple">Apple Pay</TabsTrigger>
                    </TabsList>

                    <TabsContent value="card">
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="cardName" className="mb-2 block">
                            Name on Card
                          </Label>
                          <Input
                            id="cardName"
                            placeholder="John Doe"
                            className="w-full"
                          />
                        </div>

                        <div>
                          <Label htmlFor="cardNumber" className="mb-2 block">
                            Card Number
                          </Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="w-full"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="expiry" className="mb-2 block">
                              Expiry Date
                            </Label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                              className="w-full"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvc" className="mb-2 block">
                              CVC
                            </Label>
                            <Input
                              id="cvc"
                              placeholder="123"
                              className="w-full"
                            />
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="saveCard" />
                          <div className="grid gap-1.5 leading-none">
                            <label
                              htmlFor="saveCard"
                              className="text-sm font-medium leading-none"
                            >
                              Save card for future bookings
                            </label>
                          </div>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="paypal">
                      <div className="text-center py-8">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
                          alt="PayPal"
                          className="h-12 mx-auto mb-4"
                        />
                        <p className="text-gray-600 mb-4">
                          Click the button below to pay with PayPal
                        </p>
                        <Button className="bg-[#0070ba] hover:bg-[#003087] text-white">
                          Pay with PayPal
                        </Button>
                      </div>
                    </TabsContent>

                    <TabsContent value="apple">
                      <div className="text-center py-8">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Apple_Pay_logo.svg/1200px-Apple_Pay_logo.svg.png"
                          alt="Apple Pay"
                          className="h-12 mx-auto mb-4"
                        />
                        <p className="text-gray-600 mb-4">
                          Click the button below to pay with Apple Pay
                        </p>
                        <Button className="bg-black hover:bg-gray-800 text-white">
                          Pay with Apple Pay
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <div className="flex items-start space-x-2 mb-6">
                      <Checkbox id="terms" required />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="terms"
                          className="text-sm font-medium leading-none"
                        >
                          I agree to the{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            Terms and Conditions
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-blue-600 hover:underline">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
                      onClick={() => {
                        // Handle payment submission
                        alert(
                          "Booking successful! You will receive a confirmation email shortly.",
                        );
                      }}
                    >
                      Complete Booking
                    </Button>

                    <p className="text-xs text-gray-500 text-center mt-4">
                      Your payment is secure and encrypted. You will receive a
                      confirmation email once your booking is complete.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={prevStep}
              className="border-gray-300 text-gray-700"
            >
              Back
            </Button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

      <Helmet>
        <title>Book Your Driving Lesson | Drive Dojo Driving School</title>
        <meta
          name="description"
          content="Book your driving lesson with Drive Dojo. Choose from a variety of packages and instructors."
        />
      </Helmet>

      <Navbar />

      <main className="pt-[100px] pb-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* Floating "Need Help?" button */}
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-14 px-6 shadow-lg flex items-center space-x-2"
              onClick={() => alert("Our support team will assist you shortly!")}
            >
              <span>Need Help?</span>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
            </Button>
          </motion.div>

          {/* Hero Section */}
          <section className="mb-12">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1800&q=80"
                  alt="Driving lesson"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
              </div>

              <div className="relative z-10 py-16 px-6 md:px-12 max-w-4xl">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold mb-4 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Book Your Driving Lesson
                </motion.h1>

                <motion.p
                  className="text-xl mb-8 text-white/90 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Choose your package, schedule, and instructor in just a few
                  simple steps. Start your journey to becoming a confident
                  driver today!
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-white">Flexible scheduling</span>
                  </div>
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-white">Expert instructors</span>
                  </div>
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-white">
                      Modern, dual-control cars
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Booking Process */}
          <section className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 mb-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-100 rounded-full opacity-50 translate-y-1/2 -translate-x-1/2"></div>

            {renderStepIndicator()}

            <AnimatePresence mode="wait">
              {step === 1 && renderPackageSelection()}
              {step === 2 && renderDateTimeSelection()}
              {step === 3 && renderPersonalDetails()}
              {step === 4 && renderPayment()}
            </AnimatePresence>
          </section>

          {/* Elite Services Section */}
          <section className="mb-12">
            <EliteServicesSection />
          </section>

          {/* Why Book With Us */}
          <section className="mb-12 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl animate-float"></div>

            <motion.div
              className="relative z-10 mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block mb-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 500 }}
                viewport={{ once: true }}
              >
                <Sparkles className="inline-block h-4 w-4 mr-1 mb-0.5" />
                Driving Excellence
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Why Book With Drive Dojo?
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Join thousands of satisfied students who've chosen us for their
                driving journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Users className="h-10 w-10 text-white" />,
                  title: "Expert Instructors",
                  description:
                    "All our instructors are DVSA-approved with years of experience teaching students of all levels.",
                  delay: 0,
                  image:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
                  gradient: "from-blue-600 to-indigo-600",
                  emoji: "👩‍🏫",
                },
                {
                  icon: <Car className="h-10 w-10 text-white" />,
                  title: "Modern Vehicles",
                  description:
                    "Learn in our fleet of modern, dual-control cars equipped with the latest safety features.",
                  delay: 0.1,
                  image:
                    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
                  gradient: "from-green-600 to-teal-600",
                  emoji: "🚗",
                },
                {
                  icon: <MapPin className="h-10 w-10 text-white" />,
                  title: "Local Knowledge",
                  description:
                    "Our instructors know all the local test routes and can help you master challenging areas.",
                  delay: 0.2,
                  image:
                    "https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?w=800&q=80",
                  gradient: "from-red-600 to-orange-600",
                  emoji: "🗺️",
                },
                {
                  icon: <Zap className="h-10 w-10 text-white" />,
                  title: "Fast Progress",
                  description:
                    "Our teaching methods help you learn quickly and efficiently, getting you test-ready in less time.",
                  delay: 0.3,
                  image:
                    "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?w=800&q=80",
                  gradient: "from-yellow-600 to-amber-600",
                  emoji: "⚡",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative h-[300px] rounded-xl overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Background Image with Gradient Overlay */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90 group-hover:opacity-80 transition-opacity duration-300`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col p-6 text-white">
                    <motion.div
                      className="flex items-center mb-4"
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="bg-white/20 p-3 rounded-full mr-3 backdrop-blur-sm"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        {feature.icon}
                      </motion.div>
                      <div>
                        <motion.span
                          className="text-2xl mr-2"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                        >
                          {feature.emoji}
                        </motion.span>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                      </div>
                    </motion.div>

                    <p className="text-white/90 mb-4">{feature.description}</p>

                    <motion.div
                      className="mt-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.button
                        className="bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg backdrop-blur-sm flex items-center justify-center w-full group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => (window.location.href = "/booking")}
                      >
                        Learn More
                        <motion.span
                          className="ml-2"
                          initial={{ x: 0 }}
                          animate={{ x: [0, 5, 0] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </motion.span>
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Animated highlight line at the bottom */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-white"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg shadow-lg group relative overflow-hidden"
                onClick={() => (window.location.href = "/booking")}
              >
                <span className="relative z-10 flex items-center">
                  Start Your Journey Today
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </span>
                <motion.span
                  className="absolute inset-0 bg-white opacity-10"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </Button>
            </motion.div>
          </section>

          {/* FAQ Section */}
          <section>
            <motion.h2
              className="text-3xl font-bold text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>

            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
              {[
                {
                  question: "How do I reschedule my lesson?",
                  answer:
                    "You can reschedule your lesson up to 48 hours before your scheduled time through your account or by calling our customer service team.",
                },
                {
                  question: "What happens if I need to cancel?",
                  answer:
                    "Cancellations made with at least 48 hours notice will receive a full refund. Late cancellations may be subject to a fee.",
                },
                {
                  question: "Do I need to bring anything to my first lesson?",
                  answer:
                    "Please bring your provisional driving license to your first lesson. Comfortable shoes are also recommended.",
                },
                {
                  question: "How long does it take to learn to drive?",
                  answer:
                    "The average learner takes around 45 hours of professional instruction to pass their test, but this varies based on individual learning pace.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <details className="group p-6">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ChevronRight className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                      {faq.answer}
                    </p>
                  </details>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;
