"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronRight,
  Mail,
  MessageSquare,
  Share2,
  MapPin,
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import CreateEventPage from "./eventForm";
import { Link } from "react-router-dom";

export default function EventManagementPage() {
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const tabs = ["Overview", "Details", "Registration"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <motion.div
          className="flex justify-between items-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            Personal <ChevronRight size={16} className="mx-1" />
            <h1 className="text-4xl font-bold mt-2">bla</h1>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="border-b border-gray-800 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <Link to={`#${tab}`}>
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-1 relative ${
                    activeTab === tab ? "text-white" : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      layoutId="activeTab"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Event Details */}
          <motion.div
            className="lg:col-span-2 bg-gray-800/30 rounded-xl p-6 border border-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex">
              <div className="ml-6 flex-1">
                <h2 className="text-2xl font-semibold mb-2">bla</h2>

                <div className="flex items-center text-amber-400 mb-3">
                  <div className="bg-amber-400/10 rounded-md p-1 mr-2">
                    <Calendar size={16} className="text-amber-400" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm">Tuesday, April 29</div>
                    <div>5:00 PM - 6:00 PM</div>
                  </div>
                </div>

                <div className="flex items-center text-gray-300 mb-4">
                  <div className="bg-gray-700/30 rounded-md p-1 mr-2">
                    <MapPin size={16} />
                  </div>
                  <span className="text-purple-400">Register to See Address</span>
                </div>

                <div className="mt-4">
                  <div className="text-gray-300 font-medium mb-2">Registration</div>
                  <div className="bg-gray-800/50 rounded-lg p-4 mb-4">
                    <p className="text-gray-300 mb-4">Welcome! To join the event, please register below.</p>

                    <div className="flex items-center mb-4 bg-gray-700/30 rounded-lg p-3">
                      <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center mr-3">
                        <span className="text-sm">S</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium">Satyendra Mourya</div>
                        <div className="text-xs text-gray-400">satyendra@acceleratorx.co</div>
                      </div>
                    </div>

                    <button className="w-full bg-white text-gray-900 font-medium py-2 rounded-md hover:bg-gray-200 transition-colors duration-300">
                      One-Click Register
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-gray-400 text-sm">lu.ma/j99v63b3</span>
                      <ArrowRight size={14} className="ml-2 text-gray-500" />
                    </div>
                    <button className="text-gray-400 hover:text-white transition-colors duration-300">COPY</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - When & Where */}
          <motion.div
            className=" rounded-xl "
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <CreateEventPage />
          </motion.div>
        </div>

        {/* Footer Actions */}
        <motion.div
          className="mt-6 flex flex-wrap justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Share Event</span>
            <div className="flex space-x-3">
              <SocialButton icon={<Facebook size={18} />} />
              <SocialButton icon={<Twitter size={18} />} />
              <SocialButton icon={<Linkedin size={18} />} />
              <SocialButton icon={<MessageCircle size={18} />} />
            </div>
          </div>

          <div className="flex space-x-4 mt-4 sm:mt-0">
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300">
              Edit Event
            </button>
            <button className="px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-300">
              Change Photo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ActionButton({ icon, text, bgClass }: { icon: React.ReactNode; text: string; bgClass: string }) {
  return (
    <motion.button
      className={`flex items-center p-4 bg-gradient-to-br ${bgClass} border border-gray-800 rounded-xl hover:border-gray-700 transition-all duration-300`}
      whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(139, 92, 246, 0.15)" }}
    >
      <div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center mr-3">{icon}</div>
      <span className="font-medium">{text}</span>
    </motion.button>
  );
}

function SocialButton({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.button
      className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
    >
      {icon}
    </motion.button>
  );
}

function EventThumbnail() {
  return (
    <motion.div
      className="w-28 h-28 relative shrink-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="grid grid-cols-3 grid-rows-3 gap-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.div
            key={i}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-300 to-gray-500"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
