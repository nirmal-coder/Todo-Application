import React from "react";
import { useForm } from "react-hook-form";
import { IoArrowBack } from "react-icons/io5";
import { todoCategories } from "../utils/uiConfig";
import { Link } from "react-router";
import { FaPlus } from "react-icons/fa6";
import useTodo from "../hooks/useTodo";

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addToTodos } = useTodo();
  const onSubmit = (data) => {
    addToTodos(data);
  };
  return (
    <div className="max-w-[990px] mx-auto bg-[var(--bg-primary)] min-h-screen p-4">
      <Link
        to="/"
        className="flex items-center gap-x-4 py-4 text-[var(--text-primary)] hover:text-[var(--text-secondary)]"
      >
        <IoArrowBack /> Back
      </Link>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-[var(--bg-tertiary)] p-6 mt-6 shadow-2xl rounded-sm"
      >
        <h1 className="text-lg text-center text-[var(--text-primary)] font-bold">
          Add Todo 📝
        </h1>
        <div className="flex flex-col my-4">
          <label htmlFor="title" className="text-base font-semibold">
            Title :
          </label>

          <input
            className="w-full h-8 text-sm pl-4 bg-[var(--bg-secondary)] my-4 rounded max-w-[300px]"
            type="text"
            placeholder="Add Todo's here..."
            {...register("title", {
              required: "Please enter a title for your task",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
              maxLength: {
                value: 40,
                message: "Title cannot exceed 40 characters",
              },
            })}
          />

          {errors?.title && (
            <p className="text-red-600 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="text-base font-semibold">
            Category :
          </label>

          <select
            id="category"
            {...register("category", {
              required: "Please select a category",
            })}
            className="w-[200px] bg-[var(--bg-secondary)] my-4 py-2 px-1"
          >
            <option value="">-- Select Category --</option>

            {todoCategories.map((each) => (
              <option key={each.id} value={each.id}>
                {each.icon} {each.label}
              </option>
            ))}
          </select>

          {errors?.category && (
            <p className="text-red-600 text-sm">{errors.category.message}</p>
          )}
        </div>

        <div className="flex flex-col ">
          <label htmlFor="dueDate" className="text-base font-semibold">
            Due Date :{" "}
          </label>

          <input
            className="w-[200px] bg-[var(--bg-secondary)] my-4 py-2 px-1"
            type="date"
            {...register("dueDate", {
              required: "Due date is required",
              validate: (value) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0); // remove time part

                const selectedDate = new Date(value);

                return selectedDate >= today || "Date cannot be in the past";
              },
            })}
          />

          {errors?.dueDate && (
            <p className="text-red-600 text-sm">{errors.dueDate.message}</p>
          )}
        </div>

        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 transition-all duration-100 flex gap-x-3 items-center text-white py-2 px-8 rounded"
          >
            Add Task <FaPlus />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
