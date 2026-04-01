import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";

import mockData from "../mockData/mockTransaction.json";
import { Transaction } from "../types/transaction";

const mockTransactions = mockData as Transaction[];

function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const transaction = useMemo(() => {
    return mockTransactions.find((t) => t.id === Number(id));
  }, [id]);

  return (
    <div className="h-screen bg-gray-200 p-4">
      <div className="mx-auto max-w-100">
        <button
          className="mb-4 cursor-pointer text-sm text-gray-500 hover:text-gray-800"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>
        {transaction ? (
          <div className="mt-16 flex flex-col items-center gap-1">
            <p className="text-center text-5xl font-semibold">
              ${transaction.amount.toFixed(2)}
            </p>
            <p className="text-gray-400">{transaction.name}</p>
            <p className="text-gray-400">
              {new Date(transaction.date).toLocaleDateString(undefined, {
                dateStyle: "medium",
              })}
              {" · "}
              {new Date(transaction.date).toLocaleTimeString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <div className="mt-6 w-full space-y-2 rounded-xl bg-white p-4 shadow">
              <p className="font-bold">Status: {transaction.status}</p>
              <p className="text-gray-400">{transaction.description}</p>
              <div className="my-2 border-b border-gray-300" />
              <div className="flex items-center justify-between gap-2 font-bold">
                <p>Total</p>
                <p>${transaction.amount.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Transaction not found.</p>
        )}
      </div>
    </div>
  );
}

export default Details;
