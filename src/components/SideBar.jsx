import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const SideBar = () => {
	return (
		<Sidebar
			style={{ height: "100vh" }} // Set the height to cover the entire viewport
			defaultCollapsed={true}
			collapsed={true}
			// rootStyles={{
			// 	[`.${sidebarClasses.container}`]: {
			// 		backgroundColor: "red",
			// 	},
			// }}
		>
			<Menu>
				<SubMenu label="Charts">
					<MenuItem> Pie charts </MenuItem>
					<MenuItem> Line charts </MenuItem>
				</SubMenu>
				<MenuItem> Blog </MenuItem>
				<MenuItem> Llamas </MenuItem>
			</Menu>
		</Sidebar>
	);
};

export default SideBar;
