export const getConnectionPoints = (fromId, toId, positions) => {
  const start = {
    x: positions[fromId].x + 280,  
    y: positions[fromId].y + 100,  
  };
  const end = {
    x: positions[toId].x,          
    y: positions[toId].y + 100,    
  };

  return { start, end };
};