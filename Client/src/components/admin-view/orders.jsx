import React from "react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Dialog } from "../ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import AdminOrderDetailsView from "./order-details";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "../ui/badge";

const AdminOrders = () => {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Orders</CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Order ID</TableHead>
              <TableHead className="text-left">Order Date</TableHead>
              <TableHead className="text-left">Order Status</TableHead>
              <TableHead className="text-left">Order Price</TableHead>
              <TableHead className="text-left">
                <span className="sr-only">Details</span>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="text-left">111111</TableCell>
              <TableCell className="text-left">2025-09-02</TableCell>
              <TableCell className="text-left">
                <Badge className={"py-1 px-3 bg-black"}>Pending</Badge>
              </TableCell>
              <TableCell className="text-left">$5000</TableCell>
              <TableCell className="text-left">
                <Dialog
                  open={openDetailsDialog}
                  onOpenChange={setOpenDetailsDialog}
                >
                  <Button
                    onClick={() => setOpenDetailsDialog(true)}
                  >
                    View Details
                  </Button>
                  <AdminOrderDetailsView />
                </Dialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AdminOrders;
