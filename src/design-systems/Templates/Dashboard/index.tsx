"use client";
import Navbar from "@/design-systems/Molecules/NavBar";
import Sidebar from "@/design-systems/Organisms/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-16 h-full">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
