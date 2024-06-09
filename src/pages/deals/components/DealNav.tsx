const DealNav = ({ onSelectNav }: { onSelectNav: (nav: string) => void }) => {
  return (
    <div>
      <button onClick={() => onSelectNav('main')}>Main</button>
      <button onClick={() => onSelectNav('note')}>Note</button>
      <button onClick={() => onSelectNav('activity')}>Activity</button>
    </div>
  );
};

export default DealNav;
