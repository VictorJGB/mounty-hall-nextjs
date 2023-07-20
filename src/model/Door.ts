export default class DoorClass {
  private number: number = 0;
  private hasGift: boolean = false;
  private isSelected: boolean = false;
  private isOpen: boolean = false;

  constructor(
    number: number,
    hasGift: boolean = false,
    isSelected: boolean = false,
    isOpen: boolean = false
  ) {
    this.number = number;
    this.hasGift = hasGift;
    this.isSelected = isSelected;
    this.isOpen = isOpen;
  }

  get Number() {
    return this.number;
  }
  get HasGift() {
    return this.hasGift;
  }
  get IsSelected() {
    return this.isSelected;
  }
  get IsOpen() {
    return this.isOpen;
  }
  get IsClosed() {
    return !this.isOpen;
  }

  Deselect() {
    const selected = false;
    return new DoorClass(this.number, this.hasGift, this.isOpen, selected);
  }

  // Seleciona porta
  changeSelection() {
    const isSelected = !this.IsSelected;
    return new DoorClass(this.number, this.hasGift, isSelected, this.isOpen);
  }

  openDoor() {
    const isOpen = !this.isOpen; //false
    return new DoorClass(this.number, this.hasGift, this.isSelected, isOpen);
  }
}
