import React, { useContext, useState } from "react";
import QuickTransactionModal from "./Modals/QuickTransactionModal";
import { BalanceContext } from "./Components/BalanceContext";
import fmAvatar1 from "./Modals/avatar-imgs/fm-avatars (4).png";
import fmAvatar2 from "./Modals/avatar-imgs/fm-avatars (7).png";
import mAvatar1 from "./Modals/avatar-imgs/m-avatars (2).png";
import profile from "./people (9).jpg";
import cardImage1 from "./card-image-4.png";
import cardImage2 from "./card-image2.jpg";
import "./sideContent.css";
import CardEditModal from "./Modals/CardEditModal";

const SideContent = () => {
  const [transferAmount, setTransferAmount] = useState("");
  const [error, setError] = useState("");
  const { balance, setBalance } = useContext(BalanceContext);

  // State for persons list
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Mom",
      image: profile,
      accountNumber: "1234567890",
      bank: "ABC Bank",
    },
    {
      id: 2,
      name: "Anthony",
      image: mAvatar1,
      accountNumber: "9876543210",
      bank: "XYZ Bank",
    },
    {
      id: 3,
      name: "Little sis",
      image: fmAvatar1,
      accountNumber: "5556667778",
      bank: "PQR Bank",
    },
    {
      id: 4,
      name: "Sarah",
      image: profile,
      accountNumber: "2345678923",
      bank: "DEF Bank",
    },
    {
      id: 5,
      name: "Christine",
      image: fmAvatar2,
      accountNumber: "8765432109",
      bank: "GHI Bank",
    },
  ]);

  // Modal state
  const [isQuickTransactionModalOpen, setIsQuickTransactionModalOpen] =
    useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Handle transaction logic
  const handleTransfer = () => {
    if (parseFloat(transferAmount) > balance) {
      setError("Insufficient balance");
      setTransferAmount("");
      return;
    }
    setBalance(balance - parseFloat(transferAmount));
    setTransferAmount("");
    setError("");
  };

  // Update a person after editing
  const handleSavePerson = (updatedPerson) => {
    setPersons((prevPersons) =>
      prevPersons.map((person) =>
        person.id === updatedPerson.id ? updatedPerson : person
      )
    );
  };

  // card logic
  const [cards, setCards] = useState([
    {
      id: 1,
      image: cardImage1,
      balance: 23000.77,
      bank: "Access Bank",
      cardNumber: "4236 6892 1094 1234",
      expiry: "08/26",
      holder: "Mmesoma Constance",
    },
    {
      id: 2,
      image: cardImage2,
      balance: 45200.32,
      bank: "UBA",
      cardNumber: "4236 6892 1094 5678",
      expiry: "11/27",
      holder: "John Doe",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  const updateCard = (updatedCard) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
    setShowModal(false);
  };
  const totalBalance = cards.reduce(
    (sum, card) => sum + (parseFloat(card.balance) || 0),
    0
  );

  return (
    <>
      {/* Upcoming Payments Section */}
      <section className="payment-section">
        <div className="payment-heading">
          <h1 className="font-bold text-2xl text-yellow-600">
            Upcoming Payments
          </h1>
        </div>
        <ul>
          <li>
            <h2>
              <h3>Netflix Subscription</h3>
              <p>August 5th 2024</p>
            </h2>
            <h4>$1,420.00</h4>
          </li>
          <li>
            <h2>
              <h3>Electricity Bill</h3>
              <p>August 12th 2024</p>
            </h2>
            <h4>$3,500.68</h4>
          </li>
          <li>
            <h2>
              <h3>Student Loan</h3>
              <p>August 27th 2024</p>
            </h2>
            <h4>$10,000.00</h4>
          </li>
          <li>
            <h2>
              <h3>Gym Membership</h3>
              <p>September 5th 2024</p>
            </h2>
            <h4>$2,500.59</h4>
          </li>
        </ul>
      </section>

      {/* Quick Transaction Section */}
      <section className="transaction bg-white p-5 rounded-lg">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl text-yellow-600">
            Quick Transaction
          </h1>
          {/* <button
            onClick={() => setIsQuickTransactionModalOpen(true)}
            className="p-1 border-2 border-yellow-600 px-4 rounded-lg text-sm cursor-pointer hover:text-yellow-600 hover:font-semibold"
          >
            Edit
          </button> */}
        </div>

        {/* Display Person List */}
        <div className="grid grid-cols-5 gap-5 text-center text-sm items-center">
          {persons.map((person) => (
            <div
              key={person.id}
              className="text-center flex flex-col items-center"
            >
              <img
                src={person.image}
                alt={person.name}
                className="img bg-yellow-600"
              />
              <p>{person.name}</p>
              <button
                className="text-blue-500 text-sm hover:underline"
                onClick={() => {
                  setSelectedPerson(person);
                  setIsQuickTransactionModalOpen(true);
                }}
              >
                View
              </button>
            </div>
          ))}
        </div>

        {/* Transaction Input */}
        <div>
          <input
            className="bg-gray-300 rounded-md"
            type="text"
            placeholder="$ Amount"
            value={transferAmount}
            onChange={(e) => setTransferAmount(e.target.value)}
          />
          <button
            onClick={handleTransfer}
            disabled={!transferAmount || parseFloat(transferAmount) <= 0}
            className={`text-white p-2 px-8 rounded-lg ${
              transferAmount && parseFloat(transferAmount) > 0
                ? "bg-yellow-600 hover:bg-yellow-600"
                : "bg-opacity-70 bg-yellow-600 cursor-not-allowed"
            }`}
          >
            Send
          </button>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        </div>
      </section>

      {/* Available Cards Section */}
      <section className="mt-7 bg-white p-7 rounded-xl">
        <h1 className="font-bold text-2xl text-yellow-600">Available Cards</h1>
        <h3>Total Balance : {totalBalance.toLocaleString()}</h3>
        <div className="flex flex-col gap-5 mt-4">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => openModal(card)}
              className="p-5 rounded-xl text-white cursor-pointer"
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                height: "190px",
              }}
            >
              <div className="flex justify-between">
                <div>
                  <p>Balance</p>
                  <h2 className="text-xl font-bold">
                    ${card.balance.toLocaleString()}
                  </h2>
                </div>
                <p>{card.bank}</p>
              </div>
              <p className="text-end mt-4 font-semibold text-[17px">
                {card.cardNumber}
              </p>
              <div className="flex justify-between mt-5 text-sm">
                <div>
                  <p>Valid Thru</p>
                  <p>{card.expiry}</p>
                </div>
                <div>
                  <p>Card Holder</p>
                  <p>{card.holder}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Transaction Modal */}
      {isQuickTransactionModalOpen && selectedPerson && (
        <QuickTransactionModal
          isOpen={isQuickTransactionModalOpen}
          onClose={() => setIsQuickTransactionModalOpen(false)}
          person={selectedPerson}
          onSave={handleSavePerson}
        />
      )}

      {showModal && selectedCard && (
        <CardEditModal
          card={selectedCard}
          onSave={updateCard}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default SideContent;
