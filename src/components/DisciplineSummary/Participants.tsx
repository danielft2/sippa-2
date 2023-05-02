import Avatar from '../Avatar';

export function Participants() {
   return (
      <div className="w-[100px] h-[30px]">
         <div className="flex relative">
            <div className="absolute right-5">
               <Avatar
                  avatarImageUrl={'https://github.com/danielft2.png'}
                  name="Daniel"
                  width="26"
                  textSizeFalback="text-[8px]"
               />
            </div>
            <div className="z-10 absolute right-9">
               <Avatar
                  avatarImageUrl={'https://github.com/VictorM-Coder.png'}
                  name="Daniel"
                  width="26"
                  textSizeFalback="text-[8px]"
               />
            </div>
            <div className="z-20 absolute right-14">
               <Avatar
                  avatarImageUrl={'https://github.com/alexsonalmeida.png'}
                  name="Daniel"
                  width="26"
                  textSizeFalback="text-[8px]"
               />
            </div>
            <span className="absolute -right-1 text-sm text-gray-600 top-1">
               +12
            </span>
         </div>
      </div>
   );
}
