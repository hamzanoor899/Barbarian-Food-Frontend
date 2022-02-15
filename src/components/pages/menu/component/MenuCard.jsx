import React from "react";
import { Card } from "react-bootstrap";
import { CardBody, CardTitle } from "reactstrap";

export const MenuCard = () => {
    const card = {
        id: 1,
        title: 'Menu 1',
    }
  return (
      <Card className="menu_card_style">
          <div className="card_flips"></div>
          <div className="card_flips_1"></div>
          <div className="card_flips_2"></div>
          <div className="card_flips_3"></div>
          <div className="card_flips_4"></div>
        <CardTitle className="menu_card_title">
            MENU 1
        </CardTitle>
        <CardBody>
          <ul className="menu_card_list_style">
            <li><span className="text-black">Mutton Karahai</span></li>
            <li><span className="text-black">Chicken Karahai</span></li>
            <li><span className="text-black">Beaf Karahai</span></li>
            <li><span className="text-black">Mutton Karahai</span></li>
            <li><span className="text-black">Chicken Karahai</span></li>
            <li><span className="text-black">Beaf Karahai</span></li>
          </ul>
        </CardBody>
      </Card>
  );
};
