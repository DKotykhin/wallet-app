import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  MAX_BALANCE,
  randomBalance,
  calculateDailyPoints,
  formatPoints,
} from "../utils/wallet";
import TransactionCard from "../components/TransactionCard";
import mockData from "../mockData/mockTransaction.json";
import { Transaction } from "../types/transaction";
const mockTransactions = mockData as Transaction[];

function Home() {
  const balance = randomBalance();
  const points = formatPoints(calculateDailyPoints(new Date()));

  return (
    <div className="flex h-screen flex-col bg-gray-200 p-4">
      <div className="mx-auto flex min-h-0 w-full max-w-100 flex-1 flex-col">
        <div className="flex gap-2">
          <div className="flex w-full flex-col gap-2">
            <div className="min-h-20 w-full rounded-xl bg-white px-3 py-2 shadow">
              <p className="text-sm font-medium">Card Balance</p>
              <p className="text-2xl leading-none font-bold">
                ${balance.toFixed(2)}
              </p>
              <p className="text-sm text-gray-400">
                ${(MAX_BALANCE - balance).toFixed(2)} Available
              </p>
            </div>
            <div className="flex min-h-20 w-full flex-col justify-center rounded-xl bg-white px-3 py-2 shadow">
              <p className="text-sm font-medium">Daily points</p>
              <p className="text-sm font-medium text-gray-400">{points}</p>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between rounded-xl bg-white p-3 shadow">
            <div className="-mt-1">
              <p className="text-sm font-medium">No Payment Due</p>
              <p className="text-sm text-gray-400">You've paid your balance.</p>
            </div>
            <div className="flex justify-end">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200">
                <FontAwesomeIcon icon={faCheck} className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-6 text-2xl font-bold">Latest Transactions</p>
        <div className="mt-1 max-h-full divide-y divide-gray-300 overflow-y-auto rounded-xl bg-white px-3 py-2">
          {mockTransactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
