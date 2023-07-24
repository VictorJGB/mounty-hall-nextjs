import DoorClass from '@/model/Door';

export const createDoors = (
  quantity: number,
  selected: number
): DoorClass[] => {
  return Array.from({ length: quantity }, (_, i) => {
    const number = i + 1;
    const hasGift = number == selected;
    return new DoorClass(number, hasGift);
  });
};

export const refreshDoors = (doors: DoorClass[], modifiedDoor: DoorClass) => {
  return doors.map((door: DoorClass) => {
    const isModified = door.Number === modifiedDoor.Number;

    if (isModified) {
      return modifiedDoor;
    } else {
      return modifiedDoor.IsOpen ? door : door.Deselect();
    }
  });
};
