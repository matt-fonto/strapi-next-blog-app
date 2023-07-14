import { useState } from "react";
import Modal from "react-modal";
import { HiX } from "react-icons/hi";
import { CgDanger } from "react-icons/cg";

// Modal.setAppElement("#__next");

interface DeletePostModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onDelete: () => void;
}

export const DeletePostModal = ({
  isOpen,
  onRequestClose,
  onDelete,
}: DeletePostModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Post Modal"
      className="bg-gray-800 p-6 rounded-xl border-0"
      overlayClassName="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
    >
      <button
        onClick={onRequestClose}
        className="text-gray-300 hover:text-red-500 cursor-pointer"
      >
        <HiX className="text-2xl" />
      </button>
      <CgDanger className="text-red-600 w-12 h-12 mx-auto mb-4" />

      <h2 className="text-2xl text-center font-bold text-white mb-4">
        Are you sure?
      </h2>

      <p className="text-white mb-6">
        This will delete forever the blog post. Do you want to proceed?
      </p>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onRequestClose}
          className="px-4 py-2 rounded-md text-sm font-medium text-gray-800 bg-white hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};
