import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Transaction } from "../types/transaction";
import { resolveIcon } from "../utils/icons";
import { formatDate } from "../utils/wallet";

const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group cursor-pointer py-2"
      onClick={() => navigate("/details/" + transaction.id)}
    >
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={resolveIcon(transaction.icon)}
          className="text-5xl"
        />
        <div className="w-full min-w-0 overflow-hidden">
          <div className="flex w-full min-w-0 justify-between leading-tight">
            <p className="font-bold">{transaction.name}</p>
            <p>
              {transaction.type === "payment" && "+"}$
              {transaction.amount.toFixed(2)}
            </p>
          </div>
          <p className="truncate text-sm leading-tight text-gray-400">
            {transaction.status === "pending" && <span>{"Pending - "}</span>}
            <span>{transaction.description}</span>
          </p>
          <p className="text-sm leading-tight text-gray-400">
            {transaction.user && (
              <span>
                {transaction.user}
                {" - "}
              </span>
            )}
            <span>{formatDate(transaction.date)}</span>
          </p>
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="mt-0.5 self-start text-gray-400 transition-colors duration-300 group-hover:text-gray-700"
        />
      </div>
    </div>
  );
};

export default TransactionCard;
