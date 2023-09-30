import { Box, Container, Pagination } from "@mui/material";
import React from "react";

const PaginationComponent = (props) => {
    console.log("pagination props", props);
  const { totalPages, changePage, currentPage } = props;
  return (
    <Container
      style={{ display: "flex", justifyContent: "center" }}
      component={Box}
      py={3}
    >
      <Pagination
        count={totalPages}
        color="primary"
        onChange={(event, value) => changePage(value)}
        page={currentPage}
      />
    </Container>
  );
};

export default React.memo(PaginationComponent);
