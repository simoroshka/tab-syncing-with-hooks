//this will eventually come from the component that uses the hook, here for simplicity
export const DROPDOWN_MARGIN = 10;
export const ARROW_HEIGHT = 10;
export const ARROW_WIDTH = ARROW_HEIGHT * 1.1;

export const DEFAULT_DROPDOWN_POSITION = {
  zIndex: 2000,
  position: "absolute",
  opacity: 0
};
export const DEFAULT_ARROW_POSITION = {
  before: {
    position: "absolute",
    borderLeft: `${ARROW_HEIGHT}px solid transparent`,
    borderRight: `${ARROW_HEIGHT}px solid transparent`,
    borderBottom: `${ARROW_HEIGHT}px solid white`,
    zIndex: 1999,
    top: `${-ARROW_HEIGHT}px`,
    left: "50px"
  },
  after: {
    position: "absolute",
    borderLeft: `${ARROW_HEIGHT + 2}px solid transparent`,
    borderRight: `${ARROW_HEIGHT + 2}px solid transparent`,
    borderBottom: `${ARROW_HEIGHT + 1}px solid rgba(0, 0, 0, 0.1)`,
    filter: "blur(1px)",
    zIndex: 1998,
    top: `${-ARROW_HEIGHT - 2}px`,
    left: "48px"
  }
};
