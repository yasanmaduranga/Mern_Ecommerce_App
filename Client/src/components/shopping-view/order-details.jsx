import React from 'react';
import { useState } from "react";
import CommonForm from "../common/form";
import { DialogContent } from "../ui/dialog";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { useDispatch, useSelector } from "react-redux";

const ShoppingOrderDetailsView = () => {
  return (
    <DialogContent className="sm:max-w-[600px]">
      <div className="grid gap-2">
        <div className="grid gap-1">
          <div className="flex mt-6 items-center justify-between">
            <p className="font-medium">Order ID</p>
            <Label>1111111</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Date</p>
            <Label>xxxxxxxxxx xxxxxx</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Price</p>
            <Label>$5000</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Payment method</p>
            <Label>DDDDDDDDD</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Payment Status</p>
            <Label>Pending</Label>
          </div>
          <div className="flex mt-2 items-center justify-between">
            <p className="font-medium">Order Status</p>
            <Label>
              <Badge
                className={'py-1 px-3 bg-black'}
              >
                pending
              </Badge>
            </Label>
          </div>
        </div>
        <Separator />
        <div className="grid gap-2">
          <div className="grid gap-1">
            <div className="font-medium">Order Details</div>
            <ul className="grid gap-1">
                    <li className="flex items-center justify-between">
                      <span>Title: kkkkk</span>
                      <span>Quantity: 10</span>
                      <span>Price: $50</span>
                    </li>
            </ul>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <div className="font-medium">Shipping Info</div>
            <div className="grid gap-0.5 text-muted-foreground">
              <span>yasan</span>
              <span>cccc</span>
              <span>hhhh</span>
              <span>1111</span>
              <span>5116565</span>
              <span>kjhjbjhgh</span>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  )
}

export default ShoppingOrderDetailsView;