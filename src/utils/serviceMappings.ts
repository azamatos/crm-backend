const getOutgoingCount = (arr: BasicOutgoing[]) => {
  return arr?.reduce((prev, current) => {
    return prev + current.count;
  }, 0);
};

const getIncomingCount = (arr: Incoming[]) => {
  return arr?.reduce((prev, current) => {
    return prev + current.count;
  }, 0);
};

export { getIncomingCount, getOutgoingCount };
