if (i === len - 1) {
  const { size, height } = this.multiEntryTops[i - 1];
  const miniDistance = scrollTop + this.headerTop + (height / size) - this.multiEntryTops[i].top;
  if (miniDistance >= 0) {
    index = i;
  }
} else {
  const { size, height } = this.multiEntryTops[i - 1];
  // const miniDistance = scrollTop + this.headerTop + (height / size) - this.multiEntryTops[i].top;
  const miniDistance = scrollTop + this.headerTop - this.multiEntryTops[i].top;
  if (miniDistance >= 0 && (scrollTop < this.multiEntryTops[i + 1].top - this.headerTop)) {
    index = i;
  }
}