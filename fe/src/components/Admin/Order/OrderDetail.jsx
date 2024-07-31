import { Collapse, Image } from "antd";
import React from "react";

export default function OrderDetail({ item }) {
  return (
    <Collapse
      ghost
      accordion
      items={[
        {
          key: "1",
          label: <p className="hover:text-pink-500">{item.order_key}</p>,
          children: (
            <div className="-ml-4 -mr-6">
              <div className="text-sm text-slate-500">
                Phone Number: {item.address?.phoneNumber}
              </div>
              <div className="text-xs text-slate-500 my-1">
                Address: {item.address?.address?.split("...")[0]}
              </div>

              <div></div>
              {
                item.order_key.startsWith("CT") ? (
                  <div>
                    {item.order_details?.map((item) => (
                      <div
                        key={item._id}
                        className="flex text-sm text-center my-1"
                      >
                        <Image
                          width={100}
                          src={item?.image}
                          className="rounded-lg"
                        />
                        <div>
                          <p className="text-slate-500 flex items-center  ml-1">
                            {item?.name}: {item.quantity}
                          </p>
                          <div
                            className="mx-1 text-base w-fit flex"
                            style={{ color: `#${item.color}` }}
                          >
                            <p>color: {item.color}</p>
                            <span style={{ color: `#${item.color}` }}>■</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div> // Replace null with your desired JSX/content for "CT" condition
                ) : item.order_key.startsWith("PD") ? (
                  <div>
                    <p>{item?.address?.phoneNumber}</p>

                    {item.order_details?.map((item) => (
                      <div key={item._id} className="flex text-sm text-center">
                        <Image
                          width={50}
                          src={item?.product?.images[0]?.url}
                          className="rounded-lg"
                        />
                        <p className="text-slate-500 flex items-center justify-center ml-1">
                          {item.product.name}: {item.quantity}
                        </p>
                      </div>
                    ))}
                  </div> // Replace null with your desired JSX/content for "PD" condition
                ) : null // Replace null with your desired JSX/content for the default condition
              }
            </div>
          ),
        },
      ]}
    />
  );
}
