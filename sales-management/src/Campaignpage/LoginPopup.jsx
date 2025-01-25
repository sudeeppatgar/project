import React from 'react';
import './login.css'
import totmem from './log-images/tot-members.jpeg'
import sms from './log-images/sms.jpg'
import msg from './log-images/msg.jpg'
import user from './log-images/user.jpg'
import cal from './log-images/cal.png'
import wrong from './log-images/wrong.png'

const LoginPopup = ({ show, onClose }) => {
  // If show is false, return null (don't render)
  if (!show) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
        <div class="form-container" onClick={(e) => e.stopPropagation()}>
            <div className="w-img">
        <h2 className='l-h'>Add Hotel</h2><img src={wrong} alt="" onClick={onClose}/>
        </div>
        <form>
            <label for="name">Name <span class="required"></span></label>
            <input class="inp" type="text" id="name" name="name" required/>

            <label for="image-url">Image URL</label>
            <input class="inp" text="url" id="image-url" name="image-url"/>

            <label for="address">Address <span class="required"></span></label>
            <input class="inp" id="address" name="address" required/>

            <label for="contact">Contact <span class="required"></span></label>
            <input class="inp" id="contact" name="contact" required/>

            <label for="rating">Rating</label>
            <input class="inp" type="number" id="rating" name="rating" min="1" max="5"/>

            <button className='l-btn' type="submit">Submit</button>
        </form>
        </div>
       
</div>
  );
};

export default LoginPopup;
        {/* <div class="log-a" onClick={(e) => e.stopPropagation()}>
            <div class="log-b">
        <div class="inp-1">
            <h1>Campaign Info</h1>
            <label class="lab">Campaign name</label>
            <input type="text" placeholder="Taste the future:Frozen Delights Delivered "/>
        </div>
        <div class="inp-2">
            <div class="inp2-1">
                <label class="lab">Brand</label>
                <input type="text" placeholder="Damory Food Indonesia "/> 
            </div>
            <div class="inp2-1">
                <label class="lab">Channel</label>
                <select name="" id="">
                    <option value="">Instagram Google ads</option>
                </select> 
            </div>
        </div>
        <div class="inp-3">
        <label class="lab">Description</label>
        <textarea name="" id="" rows="8"></textarea>
        </div>
        <div class="inp-4">
            <div className="inp4-1">
            <h2>Audience</h2>
            </div>
            <div className="inp4-2">
            <div class="inp2-1">
                <label class="lab">Target Customers</label>
                <div className="inp4-cust"> 
                <img src={user} alt="" />
                <input type="text" placeholder="10,000"/>
                </div>
                <label class="lab">Sms only</label>
                <div className="inp4-cust"> 
                <img src={msg} alt="" />
                <input type="text" placeholder="2,950 "/> 
                </div>
            </div>
            <div class="inp2-1">
                <label class="lab">Email only</label>
                <div className="inp4-cust"> 
                <img src={sms} alt="" />
                <input type="text" placeholder="3,890"/>
                </div>
                <label class="lab">Customers</label>
                <div className="inp4-cust"> 
                <img src={totmem} alt="" />
                <select name="" id="">
                    <option value="">All Customers</option>
                    <option value="">Proffessionals</option>
                    <option value="">College Students</option>
                    <option value="">Family</option>
                </select> 
                </div>
            </div>
            </div>
        </div>
        <div class="inp-5">
            <h2>Time Manage</h2>
            <label class="lab">Check</label>
            <select name="" id="">
                    <option value="">Every hours</option>
            </select>
            <label class="lab">Run Length</label>
            <div className="inp4-cust"> 
                <img src={cal} alt="" />
                <input type="text" placeholder='23 Dec 2024 -23 Mar 2025'/>
            </div>
        </div>
        <div class="inp-6">
            <h2>Create rules</h2>
            <div className="inp6-1">
                <select name="" className="s1">
                    <option value="">Spend</option>
                </select>
                <select name="" className="s2">*</select>
                <button>$200</button>
            </div>
            <div className="inp6-1">
                <select name="" className="s1">
                    <option value="">Increase Budget</option>
                </select>
                <select name="" className="s2">$</select>
                <button>$200</button>
            </div>
            <h2>+Add new rules</h2>
        </div>
        <div class="inp-7">
            <button className='inp-b'>Cancel</button>
            <button >Create Campaign</button>
        </div>
    </div>
    </div> */}
 