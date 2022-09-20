interface objectType {
  name: string;
  age: number;
}

const NameCard = ({
  name,
  age,
  object,
}: {
  name: string;
  age: number;
  object: { name: string; age: number };
}) => {
  return (
    <div>
      {name}/{age} / {object.name} /{object.age}
    </div>
  );
};

export default NameCard;
