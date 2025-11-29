import React from "react";
import { useNavigate } from "react-router";
import { Button } from "./ui/button";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      variant={"outline"}
      size={"sm"}
      onClick={() => navigate(-1)}
      className="p-4 mr-4"
    >
      ← Back
    </Button>
  );
};

export default BackButton;
