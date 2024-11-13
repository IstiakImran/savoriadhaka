"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type {
  MenuItem,
  MenuSectionProps,
  MenuItemCardProps,
  MenuItemModalProps,
} from "@/types/types";
import menuData from "../../../public/menu-data.json";
import Image from "next/image";

// const DietaryIcon: React.FC<DietaryIconProps> = ({ type }) => (
//   <span className="text-sm" title={type}>
//     {menuData.dietary_icons[type]}
//   </span>
// );

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  dietaryIcons,
  onClick,
}) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    onClick={onClick}
  >
    <div className="relative h-48 overflow-hidden">
      <Image
        width={400}
        height={300}
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
      />
      {item.popular && (
        <div className="absolute top-2 right-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm flex items-center">
          <Star className="h-4 w-4 mr-1 fill-white" />
          Popular
        </div>
      )}
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <span className="text-lg font-bold bg-gradient-to-r from-fuchsia-600 to-violet-600 text-transparent bg-clip-text">
          ${typeof item.price === "number" ? item.price.toFixed(2) : item.price}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {item.description}
      </p>
      {item.dietary && (
        <div className="flex gap-2">
          {item.dietary.map((diet) => (
            <span
              key={diet}
              className="text-sm bg-gradient-to-r from-fuchsia-50 to-violet-50 text-fuchsia-700 px-2 py-1 rounded-full"
            >
              {dietaryIcons[diet]} {diet}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

const MenuSection: React.FC<MenuSectionProps> = ({ category, onItemClick }) => (
  <section className="mb-16">
    <div className="text-center mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-violet-600 text-transparent bg-clip-text mb-3"
      >
        {category.name}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-600 max-w-2xl mx-auto"
      >
        {category.description}
      </motion.p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {category.items.map((item) => (
        <MenuItemCard
          key={item.id}
          item={item}
          dietaryIcons={menuData.dietary_icons}
          onClick={() => onItemClick(item)}
        />
      ))}
    </div>
  </section>
);

const MenuItemModal: React.FC<MenuItemModalProps> = ({
  item,
  isOpen,
  onClose,
  dietaryIcons,
}) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="sm:max-w-[700px]">
      {item && (
        <div className="overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-fuchsia-600 to-violet-600 text-transparent bg-clip-text">
              {item.name}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-6">
            <div className="relative h-80 rounded-xl overflow-hidden mb-6">
              <Image
                width={400}
                height={300}
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {item.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 fill-white inline mr-2" />
                  Chef&apos;s Favorite
                </div>
              )}
            </div>
            <p className="text-gray-600 text-lg mb-6">{item.description}</p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {item.dietary?.map((diet) => (
                  <span
                    key={diet}
                    className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-fuchsia-100 to-violet-100 text-fuchsia-700"
                  >
                    {dietaryIcons[diet]} {diet}
                  </span>
                ))}
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-violet-600 text-transparent bg-clip-text">
                $
                {typeof item.price === "number"
                  ? item.price.toFixed(2)
                  : item.price}
              </span>
            </div>
          </div>
        </div>
      )}
    </DialogContent>
  </Dialog>
);

const MenuPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-cyan-50">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-10 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-fuchsia-600 to-violet-600 text-transparent bg-clip-text mb-4">
            Our Menu
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of dishes, crafted with
            passion and the finest ingredients
          </p>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {menuData.categories.map((category) => (
          <MenuSection
            key={category.id}
            category={category}
            onItemClick={handleItemClick}
          />
        ))}
      </div>

      {/* Item Detail Modal */}
      <MenuItemModal
        item={selectedItem}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        dietaryIcons={menuData.dietary_icons}
      />
    </div>
  );
};

export default MenuPage;
